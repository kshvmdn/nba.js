'use strict';

const chalk = require('chalk');
// const chalk = require('chalk');
const got = require('got');
const Promise = require('pinkie-promise');
const _ = require('underscore');
const Table = require('cli-table');

const options = {
  json: true,
  timeout: 8000,
  retries: 3,
  headers: {
    'user-agent': 'https://github.com/kshvmdn/nba-games'
  }
};

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

  const table = new Table({
    head: ['AWAY', 'SCORE', 'HOME', 'STATUS'],
    colAligns: ['middle', 'middle', 'middle', 'middle'],
    style: {
      head: ['blue'],
      border: ['white']
    }
  });
  _.each(games, game => {
    const home = `${game.home.team.name}`;
    const away = `${game.visitor.team.name}`;
    const score = `${game.visitor.score} - ${game.home.score}`;
    const status = `${game.period.status}${(game.period.clock.trim() === '' ? '' : `, ${game.period.clock}`)}`;

    table.push([away, score, home, status]);
  });
  return table.toString();
};

const fetch = date => {
  return got(getHost(date), options)
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
