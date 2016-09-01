import { run } from './utils/endpointRunner'
import { work } from './utils/endpointWorker'

export const runner = run(work)
export const endpoints = require('./endpoints')

export default endpoints
