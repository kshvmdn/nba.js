import { run } from './utils/endpoint-runner'
import { work } from './utils/endpoint-worker'
import { DEFAULTS } from './constants'

const nba = run(work)

let methods = {}

Object.keys(DEFAULTS).forEach(d => {
  let o = DEFAULTS[d]
  Object.assign(methods, { [o.method]: (query, cb) => nba(d, query, cb) })
})

export { methods }
