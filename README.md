# amazon-code-verify

[![NPM VERSION](http://img.shields.io/npm/v/amazon-code-verify.svg?style=flat&logo=npm)](https://www.npmjs.com/package/amazon-code-verify)

#### A basic [NPM](https://www.npmjs.com/package/amazon-code-verify) Package which returns the amazon code verify.

**Click [here](https://www.npmjs.com/package/amazon-code-verify)** to view this package on **NPM** registry. 


## Getting started

[![NPM](https://nodei.co/npm/amazon-code-verify.png?compact=true)](https://www.npmjs.com/package/amazon-code-verify)

To use amazon-code-verify in your project, run:

```
$ npm i amazon-code-verify
```
[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)](https://nodejs.org/en/) [![amazon-code-verify](http://img.shields.io/badge/npm-amazon--code--verify-green.svg?style=flat&logo=npm)](https://www.npmjs.com/package/amazon-code-verify)


This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm install amazon-code-verify
```
## Usage

Save file as **example.js**
```js
//requrie
const verifythrough_outlookmail= require('amazon-code-verify');
//set your credentials
const Email = '*****';
const Password = '*****';
// fetch data
(async () => {
    const data = await verifythrough_outlookmail.getOTP(Email,Password);
    console.log(data);  
})()
```



Execute script on the command line

```node 
node example.js
```

## Contributing to amazon-code-verify

Check out [contributing guide](https://github.com/geekcodershivam/amazon-code-verify/blob/master/CONTRIBUTING.md) to get an overview of amazon-code-verify.

<!-- [START faq] -->

# FAQ

#### Q: Who maintains amazon-code-verify?

[Author](https://github.com/geekcodershivam) maintains this library, but we'd love your help and expertise on the project!
See [Contributing](https://github.com/geekcodershivam/amazon-code-verify/blob/master/CONTRIBUTING.md).

 
# Errors
- `login-error`         - Invaid credentials.
- `LOGIN---IN_Complete` -  Invaid credentials or Please try-out manually..
- `check your mail !`   - Not receiving verification codes.
- `otp-error !`         - amazon verification mail is not found.

## Oh, Thanks!

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://www.npmjs.com/~geekcodershivam)



> **One day your life will flash before your eyes. Make sure it is worth watching!**

