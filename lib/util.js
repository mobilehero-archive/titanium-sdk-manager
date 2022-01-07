/* eslint-disable promise/avoid-new */
const util = {};
module.exports = util;


const fs = require(`fs-extra`);
const path = require(`path`);
const http = require(`http`);
const semver = require(`semver`);
const yauzl = require(`yauzl`);
const request = require(`request`);

const { STATUS_CODES } = http;

const options = require(`./options`);

const { log } = console;
const highlight = value => value;


const legacy = require(`./legacy`);
const { isFile } = legacy;
const { arch } = legacy;

/**
 * The current machine's architecture.
 * @type {string}
 */
util.architecture = arch();

/**
 * The current machine's operating system.
 * @type {string}
 */
util.os = process.platform === `darwin` ? `osx` : process.platform;

/**
 * Mixes the network options into the request params.
 *
 * @param {object} params - Various request parameters.
 * @returns {object}
 */
util.buildRequestParams = params => {
	const { network } = options;

	if (!params.agentOptions && network.agentOptions) {
		Object.assign(params.agentOptions, network.agentOptions);
	}

	if (!params.ca && network.caFile && isFile(network.caFile)) {
		params.ca = fs.readFileSync(network.caFile);
	}

	if (!params.cert && network.certFile && isFile(network.certFile)) {
		params.cert = fs.readFileSync(network.certFile);
	}

	if (!params.proxy && params.url && (network.httpsProxy || network.httpProxy)) {
		if (/^https/.test(params.url)) {
			params.proxy = network.httpsProxy || network.httpProxy;
		} else {
			params.proxy = network.httpProxy || network.httpsProxy;
		}
	}

	if (!params.key && network.keyFile && isFile(network.keyFile)) {
		params.key = fs.readFileSync(network.keyFile);
	}

	if (!params.passphrase && network.passphrase) {
		params.passphrase = network.passphrase;
	}

	if (params.strictSSL === undefined && network.strictSSL !== undefined) {
		params.strictSSL = network.strictSSL;
	}

	return params;
};

/**
 * Extracts a zip file to the specified destination.
 *
 * @param {object} params - Various parameters.
 * @param {string} params.dest - The destination to extract the file.
 * @param {string} params.file - The path to the zip file to extract.
 * @returns {Promise} - Promise that resolves when complete.
 */
util.extractZip = async params => {
	if (!params || typeof params !== `object`) {
		throw new TypeError(`Expected params to be an object`);
	}

	const { dest, file } = params;

	if (!dest || typeof dest !== `string`) {
		throw new TypeError(`Expected destination directory to be a non-empty string`);
	}

	if (!file || typeof file !== `string`) {
		throw new TypeError(`Expected zip file to be a non-empty string`);
	}

	if (!fs.existsSync(file)) {
		throw new Error(`The specified zip file does not exist`);
	}

	if (!isFile(file)) {
		throw new Error(`The specified zip file is not a file`);
	}

	log(`Extracting ${highlight(file)} => ${highlight(dest)}`);

	await new Promise((resolve, reject) => {
		yauzl.open(file, { lazyEntries: true }, (err, zipfile) => {
			if (err) {
				return reject(new Error(`Invalid zip file: ${err.message || err}`));
			}

			zipfile
				.on(`entry`, entry => {
					if (typeof params.onEntry === `function`) {
						try {
							params.onEntry(entry.fileName);
						} catch (e) {
							return reject(e);
						}
					}

					const fullPath = path.join(dest, entry.fileName);

					if (/\/$/.test(entry.fileName)) {
						fs.mkdirp(fullPath, () => zipfile.readEntry());
					} else {
						fs.mkdirp(path.dirname(fullPath), () => {
							zipfile.openReadStream(entry, (err, readStream) => {
								if (err) {
									return reject(err);
								}

								const writeStream = fs.createWriteStream(fullPath);
								writeStream.on(`close`, () => zipfile.readEntry());
								writeStream.on(`error`, reject);
								readStream.pipe(writeStream);
							});
						});
					}
				})
				.on(`close`, resolve)
				.readEntry();
		});
	});
};

/**
 * Fetches a URL and parses the result as JSON.
 *
 * @param {string} url - The URL to request.
 * @returns {Promise} Resolves the parsed body.
 */
util.fetchJSON = url => {
	return new Promise((resolve, reject) => {
		log(`Fetching ${highlight(url)}`);
		request(util.buildRequestParams({ method: `GET`, url }), (err, response, body) => {
			if (err) {
				return reject(err);
			}

			// istanbul ignore if
			if (!response) {
				return reject(new Error(`Request error: no response`));
			}

			const { statusCode } = response;

			if (statusCode >= 400) {
				return reject(new Error(`${statusCode} ${STATUS_CODES[statusCode]}`));
			}

			try {
				resolve(JSON.parse(body));
			} catch (e) {
				reject(new Error(`Request error: malformed JSON response`));
			}
		});
	});
};

/**
 * Version number comparison helpers.
 *
 * @type {object}
 */
util.version = {
	format(ver, min, max, chopDash) {
		ver = (`${ver || 0}`);
		if (chopDash) {
			ver = ver.replace(/(-.*)?$/, ``);
		}
		ver = ver.split(`.`);
		if (min !== undefined) {
			while (ver.length < min) {
				ver.push(`0`);
			}
		}
		if (max !== undefined) {
			ver = ver.slice(0, max);
		}
		return ver.join(`.`);
	},
	eq(v1, v2) {
		return semver.eq(util.version.format(v1, 3, 3), util.version.format(v2, 3, 3));
	},
	lt(v1, v2) {
		return semver.lt(util.version.format(v1, 3, 3), util.version.format(v2, 3, 3));
	},
	rcompare(v1, v2) {
		return util.version.eq(v1, v2) ? 0 : util.version.lt(v1, v2) ? 1 : -1;
	},
};
