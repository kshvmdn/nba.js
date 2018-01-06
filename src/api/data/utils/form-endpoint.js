/**
 * Replace temporary variables in each endpoint with the provided params.
 * @param  {string} endpoint - Raw endpoint with temp. variables placed in side double braces.
 * @param  {Object} params - Object of URL variables.
 * @return {string} Encoded endpoint.
 */
export default function formEndpoint(endpoint, params = {}) {
  Object.keys(params).forEach(k => {
    if (params.hasOwnProperty(k)) {
      endpoint = endpoint.split(`{{${k}}}`).join(params[k]);
    }
  });
  return endpoint;
}
