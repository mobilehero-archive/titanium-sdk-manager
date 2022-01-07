const locations = {};
module.exports = locations;

const _ = require(`lodash`);

const legacy = require(`./legacy`);
const options = require(`./options`);
const { expandPath } = legacy;

locations.locations = {
	darwin: [
		`~/Library/Application Support/Titanium`,
		`/Library/Application Support/Titanium`,
	],
	linux: [
		`~/.titanium`,
	],
	win32: [
		`%ProgramData%\\Titanium`,
		`%APPDATA%\\Titanium`,
		`%ALLUSERSPROFILE%\\Application Data\\Titanium`,
	],
};


locations.getInstallPaths = () => {
	return _.uniq([
		..._.castArray(_.get(options, `searchPaths`), true).map(p => expandPath(p)),
		...(locations.locations[process.env.TITANIUMSDK_PLATFORM || process.platform] || []).map(p => expandPath(p)),
	]);
};
