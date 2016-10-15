import fetch from './fetch'

const noop = () => {}

/**
 * Make the request to the API, parse and format the JSON, and return it.
 * @param  {string}   endpoint - URL endpoint.
 * @param  {Function} cb - Error-first callback.
 */
function get (endpoint, cb) {
  fetch(endpoint)
    .then(res => res.body)
    .then(body => JSON.parse(body))
    .then(json => {
      if (json.hasOwnProperty('_internal')) {
        delete json._internal
      }

      return json
    })
    .then(json => cb(null, json))
    .catch(err => cb(Object.assign(err, {
      body: err.statusCode && err.statusMessage && err.response && err.response.body ? err.response.body : err.message
    })))
}

/**
 * Make the request and return the response as a Promise + callback if provided.
 * @param  {string} endpoint - Encoded URL endpoint.
 * @param  {Function} cb - Optional error-first callback for the response/error.
 * @return {Promise} Promise containing JSON response.
 */
export function work (endpoint, cb = noop) {
  return new Promise((resolve, reject) => {
    get(endpoint, (err, res) => {
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
