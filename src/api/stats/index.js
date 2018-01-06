import { run } from "./utils/endpoint-runner";
import { work } from "./utils/endpoint-worker";
import { DEFAULTS } from "./constants";

const r = run(work);

Object.keys(DEFAULTS).forEach(d => {
  let o = DEFAULTS[d];
  exports[o.method] = (query, cb) => r(d, query, cb);
});
