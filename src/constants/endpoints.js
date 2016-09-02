const DEFAULTS = {
  aheadBehind: 'Ahead or Behind', // 'Behind or Tied', 'Ahead or Tied'
  closeDefDistRange: null, // '0-2 Feet - Very Tight', '2-4 Feet - Tight', '4-6 Feet - Open', '6+ Feet - Wide Open'
  clutchTime: 'Last 5 Minutes', // 'Last 4 Minutes', 'Last 3 Minutes', 'Last 2 Minutes', 'Last 1 Minute', 'Last 30 Seconds', 'Last 10 Seconds'
  conference: null, // 'East', 'West'
  dayOffset: '0',
  defenseCategory: 'Overall', // '3 Pointers', '2 Pointers', 'Less Than 6Ft', 'Less Than 10Ft', 'Greater Than 15Ft'
  distanceRange: '5ft Range', // '8ft Range', 'By Zone'
  division: null, // 'Atlantic', 'Central', 'Northwest', 'Pacific', 'Southeast', 'Southwest', 'East', 'West'
  draftYear: null, // YYYY
  dribbleRange: null, // '0 Dribbles', '1 Dribble', '2 Dribbles', '3-6 Dribbles', '7+ Dribbles'
  gameDate: '04/20/2015', // MM/DD/YYYY
  gameScope: 'Season', // 'Yesterday', 'Last 10'
  gameSegment: null, // 'First Half', 'Second Half', 'Overtime'
  generalRange: 'Overall', // 'Catch and Shoot', 'Pullups', 'Less Than 10 ft'
  graphStats: 'PTS',
  height: null, // 'GT {ft}-{in}', 'LT {ft}-{in}'
  lastNGames: '0', // n
  leagueID: '00',
  location: null, // 'Home', 'Away'
  measureType: 'Base', // 'Advanced', 'Misc', 'Scoring', 'Usage', 'Opponent', 'Defense'
  month: '0', // null, 0 for all, 1-12 for months of year (12=sept, 1=oct, 2=dec, etc)
  optional: 'N', // 'Y'
  outcome: null, // 'W', 'L'
  period: '0', // 1-14
  perMode: 'PerGame', // 'Per100Possessions', 'Per36', 'Per40', Per48', 'PerMinute', 'PerPossession', 'PerPlay', 'MinutePer', 'Totals'
  playerID: '0',
  playerOrTeam: 'Player', // 'Team'
  playerPosition: null, // 'F', 'C', 'G'
  playerScope: 'All Players',
  playoffRound: '0', // '1', '2', '3', '4'
  pointDiff: '5', // n
  scope: 'S', // 'Rookies'
  season: '2015-16', // YYYY-YY, 'All Time'
  seasonSegment: null, // 'Pre All-Star', 'Post All-Star'
  seasonSingleYear: '2015', // YYYY
  seasonType: 'Regular Season', // 'Pre Season', 'Playoffs', 'All Star'
  shotClockRange: null, // '24-22', '22-18 Very Early', '18-15 Early', '15-7 Average', '7-4 Late', '4-0 Very Late', 'Shot Clock Off'
  shotDistRange: null, // (>, >=, <=, <) ft
  sorter: 'PTS',
  starterBench: null, // 'Starters', 'Bench'
  statCategory: 'PTS', // 'MIN', 'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TOV', 'EFF'
  statType: 'Traditional', // 'Advanced', 'Tracking'
  teamID: '0',
  touchTimeRange: null, // 'Touch < 2 Seconds', 'Touch 2-6 Seconds', 'Touch 6+ Seconds'
  weight: null // 'LT {wt}', 'GT {wt}'
}

export const ALL_PLAYERS = {
  endpoint: '/stats/commonallplayers',
  defaults: {
    IsOnlyCurrentSeason: 1,
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season
  }
}

export const ASSIST_TRACKER = {
  endpoint: '/stats/assisttracker',
  defaults: {
    PerMode: DEFAULTS.perMode,
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    PORound: null,
    Outcome: DEFAULTS.outcome,
    Location: DEFAULTS.location,
    Month: null,
    SeasonSegment: DEFAULTS.seasonSegment,
    DateFrom: null,
    DateTo: null,
    OpponentTeamID: null,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    TeamID: null,
    Conference: DEFAULTS.conference,
    Division: DEFAULTS.division,
    LastNGames: null,
    GameScope: null,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    StarterBench: DEFAULTS.starterBench,
    DraftYear: DEFAULTS.draftYear,
    DraftPick: null,
    College: null,
    Country: null,
    Height: DEFAULTS.height,
    Weight: DEFAULTS.weight
  }
}

export const BIO_STATS = {
  endpoint: '/stats/leaguedashplayerbiostats',
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    GameScope: null,
    GameSegment: DEFAULTS.gameSegment,
    Height: DEFAULTS.height,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PORound: DEFAULTS.playoffRound,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    StarterBench: DEFAULTS.starterBench,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.conference,
    Weight: DEFAULTS.weight
  }
}

export const CLUTCH_STATS = {
  endpoint: '/stats/leaguedashplayerclutch',
  defaults: {
    AheadBehind: DEFAULTS.aheadBehind,
    ClutchTime: DEFAULTS.clutchTime,
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    GameScope: null,
    GameSegment: DEFAULTS.gameSegment,
    Height: DEFAULTS.height,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    MeasureType: DEFAULTS.measureType,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    PaceAdjust: DEFAULTS.optional,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PlusMinus: DEFAULTS.optional,
    PointDiff: DEFAULTS.pointDiff,
    PORound: DEFAULTS.playoffRound,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    StarterBench: DEFAULTS.starterBench,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
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

export const GENERAL_STATS = {
  endpoint: '/stats/leaguedashplayerstats',
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    GameScope: null,
    GameSegment: DEFAULTS.gameSegment,
    Height: DEFAULTS.height,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    MeasureType: DEFAULTS.measureType,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    PaceAdjust: DEFAULTS.optional,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PlusMinus: DEFAULTS.optional,
    PORound: DEFAULTS.playoffRound,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    StarterBench: DEFAULTS.starterBench,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
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

export const HUSTLE_STATS = {
  endpoint: '/stats/leaguehustlestatsplayer',
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    Height: DEFAULTS.height,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PORound: DEFAULTS.playoffRound,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
  }
}

export const HUSTLE_STATS_PLAYER_LEADERS = {
  endpoint: '/stats/leaguehustlestatsplayerleaders',
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    Height: DEFAULTS.height,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: null,
    OpponentTeamID: null,
    Outcome: DEFAULTS.outcome,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PORound: null,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: null,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
  }
}

export const HUSTLE_STATS_TEAM_LEADERS = {
  endpoint: 'stats/leaguehustlestatsteamleaders',
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    Height: DEFAULTS.height,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: null,
    OpponentTeamID: null,
    Outcome: DEFAULTS.outcome,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PORound: null,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: null,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
  }
}

export const LEAGUE_GAMELOG = {
  endpoint: '/stats/leaguegamelog',
  defaults: {
    Counter: '1000',
    DateFrom: null,
    DateTo: null,
    Direction: 'DESC',
    LeagueID: DEFAULTS.leagueID,
    PlayerOrTeam: DEFAULTS.playerOrTeam,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    Sorter: DEFAULTS.sorter
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

export const PLAYER_COMPARE = {
  endpoint: '/stats/playercompare',
  defaults: {
    Conference: DEFAULTS.conference,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    GameSegment: DEFAULTS.gameSegment,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    MeasureType: DEFAULTS.measureType,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    PaceAdjust: DEFAULTS.optional,
    PerMode: DEFAULTS.perMode,
    Period: DEFAULTS.period,
    PlayerIDList: `${DEFAULTS.playerID},${DEFAULTS.playerID}`,
    PlusMinus: DEFAULTS.optional,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    VsPlayerIDList: DEFAULTS.playerID
  }
}

export const PLAYER_DEFENSE_STATS = {
  endpoint: '/stats/leaguedashptdefend',
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    DefenseCategory: DEFAULTS.defenseCategory,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    GameSegment: DEFAULTS.gameSegment,
    Height: DEFAULTS.height,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerID: DEFAULTS.playerID,
    PlayerPosition: DEFAULTS.playerPosition,
    PORound: DEFAULTS.playoffRound,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    StarterBench: DEFAULTS.starterBench,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
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

export const PLAYER_SHOT_STATS = {
  endpoint: '/stats/leaguedashplayerptshot',
  defaults: {
    CloseDefDistRange: DEFAULTS.closeDefDistRange,
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    DribbleRange: DEFAULTS.dribbleRange,
    GameSegment: DEFAULTS.gameSegment,
    GeneralRange: DEFAULTS.generalRange,
    Height: DEFAULTS.height,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PORound: DEFAULTS.playoffRound,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    ShotDistRange: DEFAULTS.shotDistRange,
    StarterBench: DEFAULTS.starterBench,
    TeamID: DEFAULTS.teamID,
    TouchTimeRange: DEFAULTS.touchTimeRange,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
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

export const SHOOTING_STATS = {
  endpoint: '/stats/leaguedashplayershotlocations',
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    DistanceRange: DEFAULTS.distanceRange,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    GameScope: null,
    GameSegment: DEFAULTS.gameSegment,
    Height: DEFAULTS.height,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    MeasureType: DEFAULTS.measureType,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    PaceAdjust: DEFAULTS.optional,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerPosition: DEFAULTS.playerPosition,
    PlusMinus: DEFAULTS.optional,
    PORound: DEFAULTS.playoffRound,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    StarterBench: DEFAULTS.starterBench,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
  }
}
