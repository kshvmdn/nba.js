'use strict';

const nba = require('./');
const moment = require('moment');
const minimist = require('minimist');
const version = require('../package.json').version;
const today = moment();
const defaults = {
  boolean: [
    'help',
    'version'
  ],
  alias: {
    h: 'help',
    v: 'version'
  }
};
const help = `
Usage: nba <DATE>

  Get NBA scores and updates in your command line.

Example:
  nba 20160407

Options:
  -v --version        Display current version
  -h --help           Display this help message
`;

exports.parse = argv => minimist(argv, defaults);

exports.run = options => {
  if (options.help) {
    process.stdout.write(help);
    return;
  }

  if (options.version) {
    process.stdout.write(`nba-games v${version}\n`);
    return;
  }

  let date = String(options._[0]);

  if (date === 'undefined' || !date.length) {
    date = today;
  } else {
    switch (date) {
      case 'today':
        date = today;
        break;
      case 'yesterday':
        date = today.subtract(1, 'days');
        break;
      case 'tomorrow':
        date = today.add(1, 'days');
        break;
      default:
        date = moment(date, 'YYYYMMDD');
        break;
    }
  }

  if (date.isValid()) {
    nba({date: date.format('YYYYMMDD')});
  } else {
    process.stderr.write('Expected valid date of form `YYYYMMDD`.\n');
    process.exit(1);
  }
};
