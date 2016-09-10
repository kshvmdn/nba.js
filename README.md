## nba.js 

[![npm version](https://badge.fury.io/js/nba.js.svg)](https://badge.fury.io/js/nba.js) [![Build Status](https://travis-ci.org/kshvmdn/nba.js.svg?branch=master)](https://travis-ci.org/kshvmdn/nba.js) [![Coverage Status](https://coveralls.io/repos/github/kshvmdn/nba.js/badge.svg?branch=master)](https://coveralls.io/github/kshvmdn/nba.js?branch=master) [![Dependency Status](https://img.shields.io/david/kshvmdn/nba.js.svg)](https://david-dm.org/kshvmdn/nba.js) ![code style : standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)

A Node.js library for current and historical NBA stats, scores, and data.

### Installation

You can either install the latest release via [npm](https://npmjs.com/package/nba.js) or the most updated developmental version (hosted on [GitHub](https://github.com/kshvmdn/nba.js)). You can also clone & build via git if you'd prefer that (see [this](#contribute)).

- npm

  ```sh
  $ npm install --save nba.js
  ```

- Development

  ```sh
  $ npm install --save github:kshvmdn/nba.js
  ```

### Usage / API

- Import the module.
  
  + ES5 (note the `.default`)

    ```js
    const nba = require('nba.js').default;
    // OR
    const nba = require('nba.js').endpoints;
    ```

  + ES6

    ```js
    import nba from 'nba.js';
    ```

- Each endpoint method will respond with either a Promise or an error-first callback, use whichever you prefer.
  
  ```js
  const req = nba.allPlayers();
  req.then(res => console.log(res));
  req.catch(err => console.error(err));
  ```

  ```js
  nba.allPlayers((err, res) => {
    if (err) return console.error(err);
    console.log(res);
  });
  ```

- _Refer to the project [Wiki](https://github.com/kshvmdn/nba.js/wiki) for the API documentation and usage examples._

### Contribute

This project is completely open source. Feel free to [open an issue](https://github.com/kshvmdn/nba.js/issues) or [make a pull request](https://github.com/kshvmdn/nba.js/pulls). :smile:

- To clone & build:

  ```sh
  $ git clone https://github.com/kshvmdn/nba.js.git && cd nba\.js && npm install
  ```

- Before submitting a PR, please ensure you have added _adequate_ tests and the changes comply with the [Standard](https://github.com/feross/standard) style guide (`npm run lint`).

### License

[MIT](./LICENSE) © [Kashav Madan](http://kshvmdn.com).
