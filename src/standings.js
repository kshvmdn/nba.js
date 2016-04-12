'use strict';

const got = require('got');
const _ = require('underscore');

const options = require('./options');

const getHost = year => `http://data.nba.com/data/json/cms/${year}/league/standings.json`;

const parse = res => {
  if (res.statusCode !== 200) {
    throw new Error(`Couldn't retrieve standings data.`);
  }

  let teams = res.body.sports_content.standings.team;
  return _.reduce(teams, (memo, team) => {
    memo.push({
      info: {
        abbr: team.abbreviation,
        name: team.nickname,
        city: team.name
      },
      stats: {
        wins: team.team_stats.wins,
        losses: team.team_stats.losses
      }
    });
    return memo;
  }, []);
};

const organizeTeams = teams => {
  let organized = {
    west: [],
    east: []
  };

  _.each(teams, team => {
    if (_.contains(options.teams.west, team.info.abbr)) {
      organized.west.push(team);
    } else {
      organized.east.push(team);
    }
  });
  return organized;
};

module.exports = args => {
  let year = args.year;
  return got(getHost(year), options.request)
    .then(response => {
      return parse(response);
    })
    .then(response => {
      return organizeTeams(response);
    })
    .then(response => {
      console.log(JSON.stringify(response, null, 2));
    })
    .catch(error => {
      throw error;
    });
};
