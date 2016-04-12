'use strict';

const got = require('got');
const _ = require('underscore');

const options = require('./options');
const utils = require('./utils');

const getHost = year => `http://data.nba.com/data/json/cms/${year}/league/standings.json`;

module.exports = args => {
  let year = args.year;
  return got(getHost(year), options.request)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      throw error
    });
}
