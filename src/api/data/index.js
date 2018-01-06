import { ENDPOINTS } from "./constants";
import formEndpoint from "./utils/form-endpoint";
import { work } from "./utils/worker";

for (let e in ENDPOINTS) {
  let o = ENDPOINTS[e];

  exports[o.method] = (params, cb) => {
    if (params instanceof Function) {
      cb = params;
      params = {};
    }

    let endpoint = formEndpoint(o.endpoint, params);
    return work(endpoint, cb);
  };
}
