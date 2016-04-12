#!/usr/bin/env node
'use strict';

const cli = require('./src/cli')(process.argv.slice(2));
const scores = require('./src/scores');
const standings = require('./src/standings');

if (cli) {
  let func = cli.year ? standings : scores;
  func(cli)
    .then(res => {
      process.exit(0);
    })
    .catch(e => {
      console.error(e.message);
      console.error(`Please ensure that you're connected to the Internet and you entered a valid date. Run "nba -h" for help.`);
      process.exit(1);
    })
} else {
  process.exit(1);
}
