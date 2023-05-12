# `react-ip-location`
    
  - Simplest, lightest and fastest JS library to get your ip address and location.
  
  - Check current location by a provided ip address.

[![NPM](https://img.shields.io/npm/v/react-ip-location.svg)](https://www.npmjs.com/package/react-ip-location) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Table of Contents

  - [Features](#features)
  - [Browser Support](#browser-support)
  - [Installing](#installing)
  - [Usage](#usage)

## Features

  - getIPLocation();
  - checkIPLocation('your-ip-address');
  - Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installing

### Package manager

Using yarn:

```bash
$ yarn add react-ip-location
```

Using npm:

```bash
$ npm install react-ip-location
```


## Usage

```javascript
import React from 'react';
import { getIPLocation, checkIPLocation } from "react-ip-location";


export const App = () => {
  getIPLocation().then(result => {
    // console.log(result);
  });
  checkIPLocation('42.115.92.231').then(result => {
    // console.log(result);
  });

  // Or declare an async function in your component
  const getMyIP = async () => {
      const location = await getIPLocation();
      return console.log("my location", location);
  };
  
  getMyIP();

  return <div>PAGE COTNENT</div>

};
```

## License

MIT © [HFrontend](https://github.com/HuyFrontend)

---