const legacy = {};
module.exports = legacy;


const path = require(`path`);
const fs = require(`fs-extra`);
const child_process = require(`child_process`);

const { execSync } = child_process;

const homeDirRegExp = /^~([\\|/].*)?$/;
const winRegExp = /^win/;
const winEnvVarRegExp = /(%([^%]*)%)/g;

legacy.expandPath = (...segments) => {
	const platform = process.env.APPCD_TEST_PLATFORM || process.platform;
	segments[0] = segments[0].replace(homeDirRegExp, `${process.env.HOME || process.env.USERPROFILE}$1`);
	if (winRegExp.test(platform)) {
		return path.resolve(path.join.apply(null, segments).replace(winEnvVarRegExp, (s, m, n) => {
			return process.env[n] || m;
		}));
	}
	return path.resolve.apply(null, segments);
};

legacy.isDir = dir => {
	try {
		return fs.statSync(dir).isDirectory();
	} catch (e) {
		// squelch
	}
	return false;
};

legacy.isFile = file => {
	try {
		return fs.statSync(file).isFile();
	} catch (e) {
		// squelch
	}
	return false;
};


let archCache = null;

/**
 * Returns the current machine's architecture. Possible values are `x64` for 64-bit and `x86` for
 * 32-bit (i386/ia32) systems.
 *
 * @param {boolean} bypassCache - =false - When true, re-detects the system architecture, though it
 * will never change.
 * @returns {string} - Architecture name.
 */
legacy.arch = bypassCache =>  {
	if (archCache && !bypassCache) {
		return archCache;
	}

	// we cache the architecture since it never changes
	const platform = process.env.APPCD_TEST_PLATFORM || process.platform;
	archCache = process.env.APPCD_TEST_ARCH || process.arch;

	if (archCache === `ia32`) {
		if ((platform === `win32` && process.env.PROCESSOR_ARCHITEW6432)
			|| (platform === `linux` && /64/.test(execSync(`getconf LONG_BIT`)))) {
			// it's actually 64-bit
			archCache = `x64`;
		} else {
			archCache = `x86`;
		}
	}

	return archCache;
};
