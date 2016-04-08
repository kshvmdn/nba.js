'use strict';

const got = require('got');
const _ = require('underscore');
const Table = require('cli-table');
const leftpad = require('left-pad');
const options = require('./options');

const getHost = date => `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${date}/games.json`;

const parse = data => {
  return _.reduce(data.sports_content.games.game, (memo, game) => {
    memo.push({
      arena: game.arena,
      location: `${game.city}, ${game.state}`,
      period: {
        status: game.period_time.period_status,
        clock: game.period_time.game_clock
      },
      visitor: {
        team: {
          abbr: game.visitor.abbreviation,
          name: game.visitor.nickname,
          city: game.visitor.city
        },
        score: game.visitor.score
      },
      home: {
        team: {
          abbr: game.home.abbreviation,
          name: game.home.nickname,
          city: game.home.city
        },
        score: game.home.score
      }
    });
    return memo;
  }, []);
};

const format = (date, games) => {
  if (!games.length) {
    throw new Error(`Couldn't find any games for ${date}.`);
  }

  const table = new Table(options.table);
  _.each(games, game => {
    const homeTeam = game.home.team.name.trim();
    const homeScore = game.home.score.trim() === '' ? 0 : game.home.score;
    const awayTeam = game.visitor.team.name.trim();
    const awayScore = game.visitor.score.trim() === '' ? 0 : leftpad(game.visitor.score.trim(), 3, ' ');
    const status = `${game.period.status.trim()}${(game.period.clock.trim() === '' ? '' : `, ${game.period.clock.trim()}`)}`;

    let row = [awayTeam, awayScore, homeScore, homeTeam, status]
    table.push(row);
  });
  return table.toString();
};

const fetch = date => {
  return got(getHost(date), options.request)
    .then(response => {
      return parse(response.body);
    })
    .then(response => {
      console.log(format(date, response));
    })
    .catch(error => {
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = options => fetch(options.date);
