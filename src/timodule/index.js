
const timodule = {};
module.exports = timodule;


const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');

const options = require('../options');
const TitaniumModule = require('./titanium-module');
const getInstallPaths = require('../locations');

const legacy = require('../legacy');
const { expandPath } = legacy;
const { isDir } = legacy;

timodule.TitaniumModule = TitaniumModule;

const cachedInstalledModules = _.memoize(() => {
	const results = {};

	for (const dir of timodule.getPaths()) {
		if (!isDir(dir)) {
			continue;
		}

		for (const platform of fs.readdirSync(dir)) {
			const platformDir = path.join(dir, platform);
			if (!isDir(platformDir)) {
				continue;
			}

			for (const moduleName of fs.readdirSync(platformDir)) {
				const moduleDir = path.join(platformDir, moduleName);
				if (!isDir(moduleDir)) {
					continue;
				}

				for (const version of fs.readdirSync(moduleDir)) {
					const versionDir = path.join(moduleDir, version);
					try {
						const tiModule = new TitaniumModule(versionDir);
						if (!results[platform]) {
							results[platform] = {};
						}
						if (!results[platform][tiModule.moduleid]) {
							results[platform][tiModule.moduleid] = {};
						}
						results[platform][tiModule.moduleid][tiModule.version] = tiModule;
					} catch (e) {
						// Do nothing
					}
				}
			}
		}
	}

	return results;
});


timodule.getInstalledModules = force => {

	force && cachedInstalledModules.cache.clear();
	return cachedInstalledModules();

};


timodule.getPaths = () => {
	return _.uniq([
		..._.castArray(_.get(options, 'module.searchPaths'), true).map(p => expandPath(p)),
		...getInstallPaths().map(p => expandPath(p, 'modules')),
	]);
};
