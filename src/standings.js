'use strict';

const got = require('got');
const _ = require('underscore');

const options = require('./options');
const utils = require('./utils');

const getHost = year => `http://data.nba.com/data/json/cms/${year}/league/standings.json`;

const parse = res => {
  if (res.statusCode !== 200) {
    throw new Error(`Couldn't retrieve standings data.`);
  }

  let teams = res.body.sports_content.standings.team;
  return _.reduce(teams, (memo, team) => {
    memo.push({
      'team': {
        'abbr': team.abbreviation,
        'name': team.nickname,
        'city': team.name
      },
      'wins': team.team_stats.wins,
      'losses': team.team_stats.losses,
    });
    return memo
  }, []);
}

module.exports = args => {
  let year = args.year;
  return got(getHost(year), options.request)
    .then(response => {
      return parse(response);
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      throw error
    });
}
