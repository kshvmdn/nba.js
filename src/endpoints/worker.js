import getJson from './../utils/getJson'
import flattenResultSet from './../utils/flattenResultSet'

/**
 * Make a request to the API and return the flattened JSON response.
 * @param  {string}   endpoint URL endpoint
 * @param  {Object}   defaults Query defaults for this request
 * @param  {Function} cb       Error-first callback
 * @return {Function}          Flattened API response
 */
function get (endpoint, defaults, cb) {
  getJson(endpoint, { query: defaults })
    .then((res) => res.body)
    .then((body) => JSON.parse(body))
    .then((json) => flattenResultSet(json.resultSets))
    .then((flattened) => cb(null, flattened))
    .catch((err) => cb(err))
}

/**
 * Make the request and return the response/error in a Promise & callback.
 * @param  {Object}           constants Endpoint constants
 * @param  {Object}           query     Query defaults
 * @param  {Function}         cb        Error first callback
 * @return {Function|Promise}           Request response / error
 */
export function run (constants, query, cb) {
  if (typeof query === 'function') {
    cb = query
    query = null
  }

  query = query || {}

  return new Promise((resolve, reject) => {
    get(constants.endpoint, constants.defaults, (err, res) => {
      if (err) {
        if (cb) cb(err)
        reject(err)
        return
      }

      if (cb) cb(null, res)
      resolve(res)
    })
  })
}
