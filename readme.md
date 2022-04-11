[//]: # (header-start)

<h1 align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
		Preparing for end of Axway
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; support for Amplify Cloud and Mobile   &nbsp; 👇
</h2>	

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Crash Analytics (2015 - 2022)
	</a>
</p>

<hr>
<h4 align="center">
🛑 &nbsp;&nbsp; <a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">Axway support for Amplify products has ended</a> for most products related to mobile and cloud. 
</h4>

<h4 align="center">
A few of the open-source versions of Axway Amplify products will live on after <a href="">Axway Amplify End-of-Life</a> (EOL) announcements.  However, all closed-source projects and most open-source projects are now dead.  
	</h4>

<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; A group of Axway employees, ex-Axway employees, and some developers from Titanium community have created a legal org and now officially decide all matters related to future of these products.  

<p>&nbsp;</p>
<hr>


## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [OWASP Top 10 List for API Security](https://www.youtube.com/watch?v=GLVHDj0Cpg4)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)

&nbsp;

[![Click to watch on Youtube](https://img.youtube.com/vi/GLVHDj0Cpg4/0.jpg)](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7  "Click to watch on YouTube")


> &nbsp; [↑ Watch video on YouTube ↑](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7)

&nbsp;



<p>&nbsp;</p>
<hr>

<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)

# @titanium/sdk-manager

[![@titanium/sdk-manager](https://img.shields.io/npm/v/@titanium/sdk-manager.png)](https://www.npmjs.com/package/@titanium/sdk-manager)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mobilehero-archive/titanium-sdk-manager)](https://dependabot.com)


* [API FAQ:](#api-faq)
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