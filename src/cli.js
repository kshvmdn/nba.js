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
    v: 'version',
    t: 'team'
  }
};
const help = `
Usage: nba [-h] [-v] DATE [-t TEAM]
  Get NBA scores and updates in your command line.

Example:
  $ nba 20160407
  $ nba today

Options:
  -v --version        Display current version
  -h --help           Display this help message
  -t --team           View scores for this team
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

  let date = options._[0];

  if (date !== undefined && date.length && !isNaN(date)) {
    date = moment(date, 'YYYYMMDD');
  } else if (date === 'tomorrow') {
    date = today.add(1, 'days');
  } else if (date === 'yesterday') {
    date = today.subtract(1, 'days');
  } else {
    date = today;
  }

  if (date.isValid()) {
    nba({
      date: date.format('YYYYMMDD'),
      team: options.team || ''
    });
  } else {
    process.stderr.write('Expected date of form `YYYYMMDD`.\n');
    process.exit(1);
  }
};
