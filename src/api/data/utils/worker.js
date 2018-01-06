import fetch from "./fetch";

/**
 * Make the request to the API, parse and format the JSON, and return it.
 * @param  {string}   endpoint - URL endpoint.
 * @param  {Function} cb - Error-first callback.
 */
function get(endpoint, cb) {
  fetch(endpoint)
    .then(res => res.body)
    .then(body => JSON.parse(body))
    .then(json => {
      if (json.hasOwnProperty("_internal")) {
        delete json._internal;
      }

      return json;
    })
    .then(json => cb(null, json))
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
 * Make the request and return the response as a callback iff a callback is provided,
 * otherwise a Promise.
 * @param  {string} endpoint - Encoded URL endpoint.
 * @param  {Function} cb - Optional error-first callback for the response/error.
 * @return {Function|Promise} Error-first callback or Promise containing JSON response.
 */
export function work(endpoint, cb) {
  const doRequest = (handleResponse, handleError) =>
    get(endpoint, (err, res) => {
      if (err) return handleError(err);
      return handleResponse(res);
    });

  if (cb) return doRequest(res => cb(null, res), cb);
  return new Promise(doRequest);
}
