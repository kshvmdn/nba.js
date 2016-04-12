'use strict';

const got = require('got');
const _ = require('underscore');
const Table = require('cli-table');

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
      team.stats.rank = organized.west.length + 1;
      organized.west.push(team);
    } else {
      team.stats.rank = organized.west.length;
      organized.east.push(team);
    }
  });
  return organized;
};

const format = teams => {
  const west = new Table(options.standingsTable);
  _.each(teams.west, team => {
    let teamName = `${team.info.city} ${team.info.name}`;
    west.push([team.stats.rank, teamName, team.stats.wins, team.stats.losses]);
  });

  const east = new Table(options.standingsTable);
  _.each(teams.east, team => {
    let teamName = `${team.info.city} ${team.info.name}`;
    east.push([team.stats.rank, teamName, team.stats.wins, team.stats.losses]);
  });

  let westOutput = ` ${'West'}\n${west.toString()}`;
  let eastOutput = ` ${'East'}\n${east.toString()}`;
  return `${westOutput}\n\n${eastOutput}`;
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
      return console.log(format(response));
    })
    .catch(error => {
      throw error;
    });
};
