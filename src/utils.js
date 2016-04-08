const _ = require('underscore');
const moment = require('moment');

const cleanDate = date => moment(date, 'YYYYMMDD').format('MMM. Do YYYY');
const sentenceCase = txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
const inStr = (needle, objs, keys) => _.map(objs, obj => keys.some(key => obj[key].toLowerCase().indexOf(needle) > -1)).some(el => el);

module.exports = {
  cleanDate: cleanDate,
  sentenceCase: sentenceCase,
  inStr: inStr
}
