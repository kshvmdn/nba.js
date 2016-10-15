import got from 'got'

import { URL } from './../constants'

/**
 * Make a request to the stats API and return an error-first callback with the
 * JSON response.
 *
 * @param {string} endpoint - Optional API endpoint
 * @param {Object|Function} opts - Optional object of request options
 * @return {Promise} HTTP request response or error
 */
export default function fetch (endpoint = '', opts) {
  opts = Object.assign({
    headers: {
      host: 'stats.nba.com',
      connection: 'keep-alive',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
      referer: 'http://stats.nba.com/'
    },
    json: false
  }, opts || {})

  let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  let url = re.test(endpoint) ? endpoint : `${URL}${endpoint}`

  // in the case that endpoint is a URL, use endpoint, else concatenate the endpoint to URL
  return got(url, opts)
}
