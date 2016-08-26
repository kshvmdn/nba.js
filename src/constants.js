const BASE_URL = 'http://stats.nba.com'

const QUERY_DEFAULTS = {
  season: {
    year: '2015-16',
    type: 'Regular Season'
  },
  player: {
    id: '2'
  },
  league: {
    id: '00'
  },
  team: {
    id: '0'
  }
}

export {
  BASE_URL,
  QUERY_DEFAULTS
}
