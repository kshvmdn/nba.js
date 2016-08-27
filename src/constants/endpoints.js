const DEFAULTS = {
  dayOffset: '0',
  gameDate: '04/20/2015', // MM/DD/YYYY
  gameScope: 'Season', // 'Yesterday', 'Last 10'
  graphStats: 'PTS',
  leagueID: '00',
  measureType: 'Base',
  perMode: 'PerGame', // 'Per100Possessions', 'Per36', 'Per40', Per48', 'PerMinute', 'PerPossession', 'PerPlay', 'MinutePer', 'Totals'
  playerID: '0',
  playerOrTeam: 'Player', // 'Team'
  playerScope: 'All Players',
  scope: 'S', // 'Rookies'
  season: '2015-16', // YYYY-YY, 'All Time'
  seasonType: 'Regular Season', // 'Pre Season', 'Playoffs', 'All Star'
  seasonSingleYear: '2015', // YYYY
  statCategory: 'PTS', // 'MIN', 'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TOV', 'EFF'
  statType: 'Traditional', // 'Advanced', 'Tracking'
  teamID: '0'
}

/* PLAYERS ********************************************************************/

export const ALL_PLAYERS = {
  endpoint: '/stats/commonallplayers',
  defaults: {
    IsOnlyCurrentSeason: 1,
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season
  }
}

export const PLAYER_AWARDS = {
  endpoint: '/stats/playerawards',
  defaults: {
    PlayerID: DEFAULTS.playerID
  }
}

export const PLAYER_CAREER_STATS = {
  endpoint: '/stats/playercareerstats',
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PerMode: DEFAULTS.perMode,
    PlayerID: DEFAULTS.playerID
  }
}

export const PLAYER_GAMELOG = {
  endpoint: '/stats/playergamelog',
  defaults: {
    DateFrom: null,
    DateTo: null,
    LeagueID: DEFAULTS.leagueID,
    PlayerID: DEFAULTS.playerID,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType
  }
}

export const PLAYER_INFO = {
  endpoint: '/stats/commonplayerinfo',
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PlayerID: DEFAULTS.playerID
  }
}

export const PLAYER_PROFILE = {
  endpoint: '/stats/playerprofilev2',
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PerMode: DEFAULTS.perMode,
    PlayerID: DEFAULTS.playerID
  }
}

export const LEAGUE_LEADERS = {
  endpoint: '/stats/leagueleaders',
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PerMode: DEFAULTS.perMode,
    Scope: DEFAULTS.scope,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StatCategory: DEFAULTS.statCategory
  }
}

/* TEAMS **********************************************************************/

/* MISC. **********************************************************************/

export const ASSIST_TRACKER = {
  endpoint: '/stats/assisttracker',
  defaults: {
    PerMode: DEFAULTS.perMode,
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    PORound: null,
    Outcome: null,
    Location: null,
    Month: null,
    SeasonSegment: null,
    DateFrom: null,
    DateTo: null,
    OpponentTeamID: null,
    VsConference: null,
    VsDivision: null,
    TeamID: null,
    Conference: null,
    Division: null,
    LastNGames: null,
    GameScope: null,
    PlayerExperience: null,
    PlayerPosition: null,
    StarterBench: null,
    DraftYear: null,
    DraftPick: null,
    College: null,
    Country: null,
    Height: null,
    Weight: null
  }
}

export const DEFENSE_HUB = {
  endpoint: '/stats/defensehub',
  defaults: {
    GameScope: DEFAULTS.gameScope,
    LeagueID: DEFAULTS.leaugeID,
    PlayerOrTeam: DEFAULTS.playerOrTeam,
    PlayerScope: DEFAULTS.playerScope,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType
  }
}

export const DRAFT_COMBINE = {
  endpoint: '/stats/draftcombinestats',
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    SeasonYear: DEFAULTS.season
  }
}

export const DRAFT_HISTORY = {
  endpoint: '/stats/drafthistory',
  defaults: {
    College: null,
    LeagueID: DEFAULTS.leagueID,
    OverallPick: null,
    RoundNum: null,
    RoundPick: null,
    Season: DEFAULTS.seasonSingleYear,
    TeamID: DEFAULTS.teamID,
    TopX: null
  }
}

export const FRANCHISE_HISTORY = {
  endpoint: '/stats/franchisehistory',
  defaults: {
    LeagueID: DEFAULTS.leagueID
  }
}

export const HOMEPAGE = {
  endpoint: '/stats/homepagev2',
  defaults: {
    GameScope: DEFAULTS.gameScope,
    LeagueID: DEFAULTS.leagueID,
    PlayerOrTeam: DEFAULTS.playerOrTeam,
    PlayerScope: DEFAULTS.playerScope,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StatType: DEFAULTS.statType
  }
}

export const PLAYER_COMPARE = {
  endpoint: '/stats/playercompare',
  defaults: {
    Conference: null,
    DateFrom: null,
    DateTo: null,
    Division: null,
    GameSegment: null,
    LastNGames: '0',
    LeagueID: DEFAULTS.leagueID,
    Location: null,
    MeasureType: DEFAULTS.measureType,
    Month: '0',
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: null,
    PaceAdjust: 'N',
    PerMode: DEFAULTS.perMode,
    Period: '0',
    PlayerIDList: `${DEFAULTS.playerID},${DEFAULTS.playerID}`,
    PlusMinus: 'N',
    Rank: 'N',
    Season: DEFAULTS.season,
    SeasonSegment: null,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: null,
    VsConference: null,
    VsDivision: null,
    VsPlayerIDList: DEFAULTS.playerID
  }
}

export const SCOREBOARD = {
  endpoint: '/stats/scoreboardV2',
  defaults: {
    DayOffset: DEFAULTS.dayOffset,
    LeagueID: DEFAULTS.leagueID,
    gameDate: DEFAULTS.gameDate
  }
}
