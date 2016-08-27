const DEFAULTS = {
  season: {
    year: '2015-16',
    type: 'Regular Season'
  },
  league: {
    id: '00'
  },
  player: {
    id: '0'
  },
  team: {
    id: '0'
  }
}

export const PLAYER_PROFILE = {
  endpoint: '/stats/playerprofile',
  defaults: {
    Season: DEFAULTS.season.year,
    SeasonType: DEFAULTS.season.type,
    LeagueID: DEFAULTS.league.id,
    PlayerID: DEFAULTS.player.id,
    GraphStartSeason: '2009-10',
    GraphEndSeason: DEFAULTS.season.year,
    GraphStat: 'PTS'
  }
}

export const ALL_PLAYERS = {
  endpoint: '/stats/commonallplayers',
  defaults: {
    LeagueID: DEFAULTS.league.id,
    Season: DEFAULTS.season.year,
    IsOnlyCurrentSeason: 1
  }
}
