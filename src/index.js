import { run } from './utils/endpoint-runner'
import { work } from './utils/endpoint-worker'

export const runner = run(work)
export const endpoints = require('./endpoints')

export default endpoints
