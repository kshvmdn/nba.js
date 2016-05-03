'use strict';

const moment = require('moment');
const minimist = require('minimist');
const version = require('../package.json').version;
const defaults = {
  boolean: [
    'help',
    'version',
    'standings'
  ],
  string: [
    'team'
  ],
  alias: {
    h: 'help',
    v: 'version',
    t: 'team',
    s: 'standings'
  }
};
const help = `
Usage: nba [-h] [-v] DATE [-t TEAM] [-s]
  Get NBA scores and updates in your command line.

Example:
  $ nba 20160407
  $ nba today

Options:
  -v --version        Display current version and exit.
  -h --help           Display this help message and exit.
  -t --team           View scores for this team.
  -s --standings      View season standings for the provided year.
`;

module.exports = argv => {
  let today = moment();
  let options = minimist(argv, defaults);

  if (options.help) {
    process.stdout.write(help);
    return;
  }

  if (options.version) {
    process.stdout.write(`nba-games v${version}\n`);
    return;
  }

  let date = String(options._[0]);

  if (options.standings) {
    let currentSeason = today.subtract(1, 'years');
    let year = moment(date, 'YYYY', true);

    if (!year.isValid() || currentSeason < year) {
      year = currentSeason;
    }

    return {year: year.format('YYYY')};
  }

  if (date !== undefined && date.length && !isNaN(date)) {
    date = moment(date, 'YYYYMMDD', true);
  } else if (date.includes('tomorrow')) {
    date = today.add(1, 'days');
  } else if (date.includes('yesterday')) {
    date = today.subtract(1, 'days');
  } else {
    date = today;
  }

  if (!date.isValid()) {
    process.stderr.write(`Expected date of form 'YYYYMMDD'.\n`);
    return;
  }
  return {
    date: date.format('YYYYMMDD'),
    team: options.team && options.team.length ? options.team.toLowerCase() : ''
  };
};
