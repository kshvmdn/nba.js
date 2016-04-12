const _ = require('underscore');
const moment = require('moment');

module.exports.cleanDate = date => moment(date, 'YYYYMMDD').format('MMM. Do YYYY');
module.exports.sentenceCase = x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase();
module.exports.inStr = (needle, objs, keys) => _.map(objs, obj => keys.some(key => obj[key].toLowerCase().indexOf(needle) > -1)).some(el => el);
