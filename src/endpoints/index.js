import * as worker from './worker'
import { ENDPOINTS as c } from './../constants'

function allPlayers (query, cb) {
  return worker.run(c.ALL_PLAYERS, query, cb)
}

function playerProfile (query, cb) {
  return worker.run(c.PLAYER_PROFILE, query, cb)
}

export {
  allPlayers,
  playerProfile
}
