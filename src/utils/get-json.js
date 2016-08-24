import got from 'got'

import { BASE_URL } from './../constants'

/**
 * Make a request to the API and return a callback with the error or response.
 * @param  {string}          endpoint Optional API endpoint
 * @param  {Object|Function} opts     Optional object of request options
 * @param  {Function}        cb       Error-first callback
 */
function getJson (endpoint = '', opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = Object.assign({
    headers: {
      connection: 'keep-alive',
      host: 'stats.nba.com',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
      referer: 'http://stats.nba.com/'
    },
    json: true
  }, opts)

  got(`${BASE_URL}${endpoint}`, opts)
    .then(response => cb(null, response.body))
    .catch(error => cb(error, null))
}

export default getJson

