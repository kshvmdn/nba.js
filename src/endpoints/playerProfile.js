import Endpoint from './Endpoint'
import { QUERY_DEFAULTS } from './../constants'

const ENDPOINT = '/stats/playerprofile'
const DEFAULTS = {
  Season: QUERY_DEFAULTS.season.year,
  SeasonType: QUERY_DEFAULTS.season.type,
  LeagueID: QUERY_DEFAULTS.league.id,
  PlayerID: QUERY_DEFAULTS.player.id,
  GraphStartSeason: '2009-10',
  GraphEndSeason: QUERY_DEFAULTS.season.year,
  GraphStat: 'PTS'
}

function playerProfile (query, cb) {
  if (typeof query === 'function') {
    cb = query
    query = null
  }

  return new Promise((resolve, reject) => {
    let endpoint = new Endpoint(ENDPOINT, Object.assign(DEFAULTS, query || {}))

    endpoint.run((err, res) => {
      if (err) {
        if (cb) cb(err)
        return reject(err)
      }

      if (cb) cb(null, res)
      resolve(res)
    })
  })
}

export default playerProfile
