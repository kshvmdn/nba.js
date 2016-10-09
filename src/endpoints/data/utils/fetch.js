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
      host: 'data.nba.net',
      connection: 'keep-alive',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
    },
    json: false
  }, opts || {})

  let url = `${URL}${endpoint}`

  // in the case that endpoint is a URL, use endpoint, else concatenate the endpoint to URL
  return got(url, opts)
}
