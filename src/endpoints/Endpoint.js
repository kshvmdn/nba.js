import getJson from './../utils/getJson'
import flattenResultSet from './../utils/flattenResultSet'

/** Class representing a generic endpoint. */
class Endpoint {
  /**
   * Create a new Endpoint instance.
   * @param  {string} endpoint API endpoint for this Endpoint instance.
   * @param  {Object} defaults Query defaults for this API endpoint.
   */
  constructor (endpoint, defaults) {
    this.endpoint = endpoint
    this.defaults = defaults
  }

  /**
   * Make a request to the API and return the flattened JSON response.
   * @param  {Function} cb Error-first callback
   * @return {Function}    API response
   */
  run (cb) {
    getJson(this.endpoint, { query: this.defaults })
      .then((res) => res.body)
      .then((body) => flattenResultSet(body.resultSets))
      .then((flattened) => cb(null, flattened))
      .catch((err) => cb(err))
  }
}

export default Endpoint
