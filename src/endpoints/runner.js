import { ENDPOINTS as c } from './../constants'

/**
 * Endpoint runner wrapper.
 * @param  {Function} worker  Endpoint worker function
 * @return {Function}         Worker wrapper
 */
export function run (worker) {
  /**
   * Curried function to make request.
   * @param  {string}            type  Endpoint name
   * @param  {Object|Function}   query Optional request query
   * @param  {Function}          cb    Error-first cb
   * @return {Function}         [description]
   */
  return (type, query, cb) => {
    if (!worker) {
      return cb(new Error('Expected worker function.'))
    }

    if (!c.hasOwnProperty(type)) {
      return cb(new Error('Invalid endpoint type.'))
    }

    return worker(c[type], query, cb)
  }
}
