'use strict';

const got = require('got');
const _ = require('underscore');
const Table = require('cli-table');
const leftpad = require('left-pad');
const options = require('./options');
const moment = require('moment');

const cleanDate = date => moment(date, ['YYYYMMDD', 'MM-DD-YYYY']).format('MMM. Do YYYY');

const getHost = date => `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${date}/games.json`;

const parse = res => {
  if (res.statusCode !== 200) {
    throw new Error(`Couldn't retrieve game data.`);
  }

  const games = res.body.sports_content.games.game;
  return _.reduce(games, (memo, game) => {
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
    throw new Error(`Couldn't find any games for ${cleanDate(date)}.`);
  }

  const table = new Table(options.table);
  _.each(games, game => {
    const homeTeam = game.home.team.name;
    const homeScore = game.home.score === '' ? 0 : game.home.score;
    const awayTeam = game.visitor.team.name;
    const awayScore = game.visitor.score === '' ? 0 : leftpad(game.visitor.score, 3, ' ');
    const status = `${game.period.status}${(game.period.clock === '' ? '' : `, ${game.period.clock}`)}`;

    table.push([awayTeam, awayScore, homeScore, homeTeam, status]);
  });
  return table.toString();
};

const fetch = date => {
  return got(getHost(date), options.request)
    .then(response => {
      return parse(response);
    })
    .then(response => {
      console.log(format(date, response));
    })
    .catch(error => {
      // console.error(error.message);
      console.error(`Couldn't find any games for ${cleanDate(date)}.`);
      console.error(`Please ensure that you're connected to the Internet and you entered a valid date. Run "nba -h" for help.`);
      process.exit(1);
    });
};

module.exports = options => fetch(options.date);
