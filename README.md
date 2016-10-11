## nba.js 

[![npm version](https://badge.fury.io/js/nba.js.svg)](https://badge.fury.io/js/nba.js) [![Build Status](https://travis-ci.org/kshvmdn/nba.js.svg?branch=master)](https://travis-ci.org/kshvmdn/nba.js) [![Coverage Status](https://coveralls.io/repos/github/kshvmdn/nba.js/badge.svg?branch=master)](https://coveralls.io/github/kshvmdn/nba.js?branch=master) [![Dependency Status](https://img.shields.io/david/kshvmdn/nba.js.svg)](https://david-dm.org/kshvmdn/nba.js) ![code style : standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)

A Node.js library for current and historical NBA stats, scores, and data.

### Installation

Install via [npm](https://npmjs.com/packages/nba.js) or [download the source](https://github.com/kshvmdn/nba.js/archive/master.zip) (via GitHub) and build manually.

- npm

  ```sh
  $ npm install --save nba.js
  ```

- Source

  ```sh
  $ git clone https://github.com/kshvmdn/nba.js.git nba.js && cd $_ && npm install
  ```

### Usage

- Import the module.

  - ES5

    ```js
    const nba = require('nba.js').default;
    // OR
    const nbaStats = require('nba.js').stats;
    const nbaData = require('nba.js').data;
    ```

  - ES2015

    ```js
    import nba from 'nba.js';
    // OR
    import { stats as nbaStats, data as nbaData } from 'nba.js';
    ```

### API

- This library provides access to endpoints from 2 different sources:
  + [data.nba.net](http://data.nba.net)
  + [stats.nba.com](http://stats.nba.com)
- Each respectively accessible via `nba.data` and `nba.stats`.
- For the full API guide for each source, see [`API.md`](docs/usage/api)

### Examples

- See [`EXAMPLES.md`](docs/usage/EXAMPLES.md).

### Contribute

This project is completely open source. Feel free to [open an issue](https://github.com/kshvmdn/nba.js/issues) or [make a pull request](https://github.com/kshvmdn/nba.js/pulls). For more information, see [`CONTRIBUTE.md`](docs/CONTRIBUTE.md).

### License

[MIT](./LICENSE) © [Kashav Madan](http://kshvmdn.com).
