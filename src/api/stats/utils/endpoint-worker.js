import fetch from "./fetch";
import flattenResultSet from "./flatten-result-set";

/**
 * Make a request, parse & flatten the response and return it.
 * @param {string} endpoint - URL endpoint
 * @param {Object} query - URL query params for this request
 * @param {Function} cb - Error-first callback
 * @return {Function} Flattened API response
 */
function get(endpoint, query, cb) {
  fetch(endpoint, { query })
    .then(res => res.body)
    .then(body => JSON.parse(body))
    .then(json => flattenResultSet(json.resultSets || [json.resultSet]))
    .then(flattened => cb(null, flattened))
    .catch(err =>
      cb(
        Object.assign(err, {
          body:
            err.statusCode &&
            err.statusMessage &&
            err.response &&
            err.response.body
              ? err.response.body
              : err.message
        })
      )
    );
}

/**
 * Make the request and return the response/error in a Promise & callback.
 * @param {Object} constants Endpoint constants
 * @param {Object} query - Query defaults
 * @param {Function} cb - Error first callback
 * @return {Function|Promise} Request response / error
 */
export function work(constants, query, cb) {
  if (typeof query === "function") {
    cb = query;
    query = null;
  }

  query = Object.assign(constants.defaults, query || {});

  const doRequest = (handleResponse, handleError) =>
    get(constants.endpoint, query, (err, res) => {
      if (err) return handleError(err);
      return handleResponse(res);
    });

  if (cb) return doRequest(res => cb(null, res), cb);
  return new Promise(doRequest);
}
