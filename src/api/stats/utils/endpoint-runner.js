import { DEFAULTS as c } from "./../constants";

/**
 * Endpoint runner wrapper.
 * @param {Function} worker - Worker function to be used
 * @return {Function} Request function
 */
export function run(worker) {
  /**
   * Make request
   * @param {string} type - Endpoint name
   * @param {Object|Function} query - Optional request query
   * @param {Function} cb - Error-first cb
   * @return {Function} Request response or error
   */
  return (type, query, cb) => {
    if (!worker) {
      return cb(new Error("Expected worker function."));
    }

    if (!c.hasOwnProperty(type)) {
      return cb(new Error("Invalid endpoint type."));
    }

    return worker(c[type], query, cb);
  };
}
