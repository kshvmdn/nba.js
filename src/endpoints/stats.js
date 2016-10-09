import { run } from './../utils/endpoint-runner'
import { work } from './../utils/endpoint-worker'
import { ENDPOINTS } from './../constants'

const nba = run(work)

let methods = {}

Object.keys(ENDPOINTS).forEach(e => {
  let o = ENDPOINTS[e]
  Object.assign(methods, { [o.method]: (query, cb) => nba(e, query, cb) })
})

export { methods }
