[//]: # (header-start)

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h1 align="center">
	🪦 RIP Axway Amplify Titanium (2010 - 2022)
	</h1>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<p>&nbsp;</p>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h2 align="center">
		🛑 This project is no longer being maintained 🛑
	</h2>
</a>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)

# @titanium/sdk-manager

[![@titanium/sdk-manager](https://img.shields.io/npm/v/@titanium/sdk-manager.png)](https://www.npmjs.com/package/@titanium/sdk-manager)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=brentonhouse/titanium-sdk-manager)](https://dependabot.com)

> _**This is not an official Axway product.**_    
> _It is an experiment by [Brenton House](https://brenton.house) using open-source projects.  You are welcome to try it out but be aware of the risks_


* [📝 Description](#-description)
* [🚀 Getting Started](#-getting-started)
	* [Install Titanium SDK Manager](#install-titanium-sdk-manager)
	* [Get available SDK releases](#get-available-sdk-releases)
	* [Get available SDK releases _(Alternate Repo)_](#get-available-sdk-releases-alternate-repo)
	* [Get available SDK branches](#get-available-sdk-branches)
	* [Get available SDK builds](#get-available-sdk-builds)
	* [Install latest SDK release](#install-latest-sdk-release)
	* [Install SDK Release Candidate (RC)](#install-sdk-release-candidate-rc)
* [🔗 Related Links](#-related-links)
* [📣 Feedback](#-feedback)
* [©️ Legal](#️-legal)

## 📝 Description

> Library for installing Axway Titanium SDKs    
> Fork of https://github.com/appcelerator/titaniumlib


Install Titanium SDKs from _**any**_ source.

Key differences from `titaniumlib` module:

1. This module is focused _**only**_ on managing SDKs
2. Additional support for @geek/config  _(coming soon)_
3. Allow setting of repo URL for SDKs (in addition to official Axway repo) 

## 🚀 Getting Started

### Install Titanium SDK Manager

```JavaScript
npm install @titanium/sdk-manager
```

### Get available SDK releases

> Using Official Axway Repository


```JavaScript
sdk.getReleases()
	.then(releases => {
		console.log(`releases: ${JSON.stringify(releases, null, 2)}`);
	})
	.catch(error => {
		console.error('you are here → Error occurred!');
		console.error(error);
	});
```

### Get available SDK releases _(Alternate Repo)_

> Using Alternate Repository


```JavaScript
sdk.getReleases({ releasesUrl: 'https://brentonhouse.github.io/titanium-sdk-repo/releases.json'  })
	.then(releases => {
		console.log(`releases: ${JSON.stringify(releases, null, 2)}`);
	})
	.catch(error => {
		console.error('you are here → Error occurred!');
		console.error(error);
	});
```

### Get available SDK branches

> Using Official Axway Repository


```JavaScript
sdk.getBranches()
	.then(branches => {
		console.log(`branches: ${JSON.stringify(branches, null, 2)}`);
	})
	.catch(error => {
		console.error('you are here → Error occurred!');
		console.error(error);
	});
```

### Get available SDK builds

> Using Official Axway Repository


```JavaScript
sdk.getBuilds()
	.then(builds => {
		console.log(`builds: ${JSON.stringify(builds, null, 2)}`);
	})
	.catch(error => {
		console.error('you are here → Error occurred!');
		console.error(error);
	});
```

### Install latest SDK release 

> Using Official Axway Repository


```JavaScript
sdk.install()
	.then(result => {
		console.log('** SDK Installed **');
	})
	.catch(error => {
		console.error('you are here → Error occurred!');
		console.error(error);
	});
```

### Install SDK Release Candidate (RC)

> Using Alternate Repository


```JavaScript
sdk.getReleases({ releasesUrl: 'https://brentonhouse.github.io/titanium-sdk-repo/releases.json'  })
	.then(releases => {
		console.log('** SDK Installed **');
	})
	.catch(error => {
		console.error('you are here → Error occurred!');
		console.error(error);
	});
```




## 🔗 Related Links

- [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.
- [Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.
- [Turbo](https://www.npmjs.com/package/@titanium/turbo) - Variation of Titanium Alloy that adds some enhancements and customizations for rapid development.
- [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool

# 📚 Learn More

- [Axway Developer Portal](https://developer.axway.com)

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-sdk/issues)! 

## ©️ Legal


Copyright 2014-2019 by Axway, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.