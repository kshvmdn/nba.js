import got from 'got'

import { URL } from './../constants'

const HEADERS = {
  connection: 'keep-alive',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
}

/**
 * Make a request to the stats API and return an error-first callback with the
 * JSON response.
 *
 * @param {string} endpoint - Optional API endpoint
 * @param {Object|Function} opts - Optional object of request options
 * @return {Promise} HTTP request response or error
 */
function fetchStats (endpoint = '', opts) {
  let headers = Object.assign(HEADERS, {
    host: 'stats.nba.com',
    referer: 'http://stats.nba.com/'
  })

  opts = Object.assign({
    headers,
    json: false
  }, opts || {})

  let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  let url = re.test(endpoint) ? endpoint : `${URL.stats}${endpoint}`

  // in the case that endpoint is a URL, use endpoint, else concatenate the endpoint to BASE_URL
  return got(url, opts)
}

function fetchData (url, opts) {
  let headers = Object.assign(HEADERS, {
    host: 'data.nba.net'
  })

  opts = Object.assign({
    headers,
    json: false
  }, opts || {})

  return got(url, opts)
}

export default {
  stats: fetchStats,
  data: fetchData
}
