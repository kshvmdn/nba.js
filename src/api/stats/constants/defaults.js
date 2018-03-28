const DEFAULTS = {
  aheadBehind: "Ahead or Behind",
  closeDefDistRange: null,
  clutchTime: "Last 5 Minutes",
  conference: null,
  dayOffset: "0",
  defenseCategory: "Overall",
  distanceRange: "5ft Range",
  division: null,
  draftYear: null,
  dribbleRange: null,
  endPeriod: 14,
  endRange: 28800,
  gameDate: "04/20/2015",
  gameID: null,
  gameScope: "Season",
  gameSegment: null,
  generalRange: "Overall",
  graphStats: "PTS",
  groupQuantity: 5,
  height: null,
  lastNGames: "0",
  leagueID: "00",
  location: null,
  measureType: "Base",
  month: "0",
  optional: "N",
  outcome: null,
  period: "0",
  perMode: "PerGame",
  ptMeasureType: "CatchShoot",
  playerID: "0",
  playerOrTeam: "Player",
  playerPosition: null,
  playerScope: "All Players",
  playoffRound: "0",
  pointDiff: "5",
  rangeType: 0,
  scope: "S",
  season: "2017-18",
  seasonSegment: null,
  seasonSingleYear: "2015",
  seasonType: "Regular Season",
  shotClockRange: null,
  shotDistRange: null,
  sorter: "PTS",
  startPeriod: 1,
  startRange: 0,
  starterBench: null,
  statCategory: "PTS",
  statType: "Traditional",
  teamID: "0",
  touchTimeRange: null,
  weight: null
};

export const ALL_PLAYERS = {
  method: "allPlayers",
  endpoint: "/stats/commonallplayers",
  defaults: {
    IsOnlyCurrentSeason: 1,
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season
  }
};

export const ASSIST_TRACKER = {
  method: "assistTracker",
  endpoint: "/stats/assisttracker",
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
    Height: DEFAULTS.height,
    LastNGames: null,
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
    StarterBench: DEFAULTS.starterBench,
    TeamID: null,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
  }
};

export const BOXSCORE_ADVANCED = {
  method: "boxscoreAdvanced",
  endpoint: "/stats/boxscoreadvancedv2",
  defaults: {
    EndPeriod: DEFAULTS.endPeriod,
    EndRange: DEFAULTS.endRange,
    GameID: DEFAULTS.gameID,
    RangeType: DEFAULTS.rangeType,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StartPeriod: DEFAULTS.startPeriod,
    StartRange: DEFAULTS.startRange
  }
};

export const BOXSCORE_FOUR_FACTORS = {
  method: "boxscoreFourFactors",
  endpoint: "/stats/boxscorefourfactorsv2",
  defaults: {
    EndPeriod: DEFAULTS.endPeriod,
    EndRange: DEFAULTS.endRange,
    GameID: DEFAULTS.gameID,
    RangeType: DEFAULTS.rangeType,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StartPeriod: DEFAULTS.startPeriod,
    StartRange: DEFAULTS.startRange
  }
};

export const BOXSCORE_HUSTLE_STATS = {
  method: "boxscoreHustleStats",
  endpoint: "/stats/hustlestatsboxscore",
  defaults: {
    GameID: DEFAULTS.gameID
  }
};

export const BOXSCORE_MISC = {
  method: "boxscoreMisc",
  endpoint: "/stats/boxscoremiscv2",
  defaults: {
    EndPeriod: DEFAULTS.endPeriod,
    EndRange: DEFAULTS.endRange,
    GameID: DEFAULTS.gameID,
    RangeType: DEFAULTS.rangeType,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StartPeriod: DEFAULTS.startPeriod,
    StartRange: DEFAULTS.startRange
  }
};

export const BOXSCORE_PLAYER_TRACKING = {
  method: "boxscorePlayerTracking",
  endpoint: "/stats/boxscoreplayertrackv2",
  defaults: {
    EndPeriod: DEFAULTS.endPeriod,
    EndRange: DEFAULTS.endRange,
    GameID: DEFAULTS.gameID,
    RangeType: DEFAULTS.rangeType,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StartPeriod: DEFAULTS.startPeriod,
    StartRange: DEFAULTS.startRange
  }
};

export const BOXSCORE_SUMMARY = {
  method: "boxscoreSummary",
  endpoint: "/stats/boxscoresummaryv2",
  defaults: {
    GameID: DEFAULTS.gameID
  }
};

export const BOXSCORE_TRADITIONAL = {
  method: "boxscoreTraditional",
  endpoint: "/stats/boxscoretraditionalv2",
  defaults: {
    EndPeriod: DEFAULTS.endPeriod,
    EndRange: DEFAULTS.endRange,
    GameID: DEFAULTS.gameID,
    RangeType: DEFAULTS.rangeType,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StartPeriod: DEFAULTS.startPeriod,
    StartRange: DEFAULTS.startRange
  }
};

export const BOXSCORE_USAGE = {
  method: "boxscoreUsage",
  endpoint: "/stats/boxscoreusagev2",
  defaults: {
    EndPeriod: DEFAULTS.endPeriod,
    EndRange: DEFAULTS.endRange,
    GameID: DEFAULTS.gameID,
    RangeType: DEFAULTS.rangeType,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StartPeriod: DEFAULTS.startPeriod,
    StartRange: DEFAULTS.startRange
  }
};

export const DEFENSE_HUB = {
  method: "defenseHub",
  endpoint: "/stats/defensehub",
  defaults: {
    GameScope: DEFAULTS.gameScope,
    LeagueID: DEFAULTS.leaugeID,
    PlayerOrTeam: DEFAULTS.playerOrTeam,
    PlayerScope: DEFAULTS.playerScope,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType
  }
};

export const DRAFT_COMBINE = {
  method: "draftCombine",
  endpoint: "/stats/draftcombinestats",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    SeasonYear: DEFAULTS.season
  }
};

export const DRAFT_HISTORY = {
  method: "draftHistory",
  endpoint: "/stats/drafthistory",
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
};

export const FRANCHISE_HISTORY = {
  method: "franchiseHistory",
  endpoint: "/stats/franchisehistory",
  defaults: {
    LeagueID: DEFAULTS.leagueID
  }
};

export const FRANCHISE_LEADERS = {
  method: "franchiseLeaders",
  endpoint: "/stats/franchiseleaders",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    TeamID: DEFAULTS.teamID
  }
};

export const HOMEPAGE = {
  method: "homepage",
  endpoint: "/stats/homepagev2",
  defaults: {
    GameScope: DEFAULTS.gameScope,
    LeagueID: DEFAULTS.leagueID,
    PlayerOrTeam: DEFAULTS.playerOrTeam,
    PlayerScope: DEFAULTS.playerScope,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StatType: DEFAULTS.statType
  }
};

export const LEAGUE_GAMELOG = {
  method: "leagueGamelog",
  endpoint: "/stats/leaguegamelog",
  defaults: {
    Counter: "1000",
    DateFrom: null,
    DateTo: null,
    Direction: "DESC",
    LeagueID: DEFAULTS.leagueID,
    PlayerOrTeam: DEFAULTS.playerOrTeam,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    Sorter: DEFAULTS.sorter
  }
};

export const LEAGUE_LEADERS = {
  method: "leagueLeaders",
  endpoint: "/stats/leagueleaders",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PerMode: DEFAULTS.perMode,
    Scope: DEFAULTS.scope,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    StatCategory: DEFAULTS.statCategory
  }
};

export const LINEUPS = {
  method: "lineups",
  endpoint: "/stats/leaguedashlineups",
  defaults: {
    Conference: DEFAULTS.conference,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    GameSegment: DEFAULTS.gameSegment,
    GroupQuantity: DEFAULTS.groupQuantity,
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
    PlusMinus: DEFAULTS.optional,
    PORound: DEFAULTS.playoffRound,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const PLAY_BY_PLAY = {
  method: "playByPlay",
  endpoint: "/stats/playbyplay",
  defaults: {
    GameID: DEFAULTS.gameID,
    StartPeriod: DEFAULTS.startPeriod,
    EndPeriod: DEFAULTS.endPeriod
  }
};

export const PLAYER_AWARDS = {
  method: "playerAwards",
  endpoint: "/stats/playerawards",
  defaults: {
    PlayerID: DEFAULTS.playerID
  }
};

export const PLAYER_BIO_STATS = {
  method: "playerBioStats",
  endpoint: "/stats/leaguedashplayerbiostats",
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
};

export const PLAYER_CLUTCH_STATS = {
  method: "playerClutchStats",
  endpoint: "/stats/leaguedashplayerclutch",
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
};

export const PLAYER_CAREER_STATS = {
  method: "playerCareerStats",
  endpoint: "/stats/playercareerstats",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PerMode: DEFAULTS.perMode,
    PlayerID: DEFAULTS.playerID
  }
};

export const PLAYER_COMPARE = {
  method: "playerCompare",
  endpoint: "/stats/playercompare",
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
};

export const PLAYER_DEFENSE_STATS = {
  method: "playerDefenseStats",
  endpoint: "/stats/leaguedashptdefend",
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
};

export const PLAYER_GAMELOG = {
  method: "playerGamelog",
  endpoint: "/stats/playergamelog",
  defaults: {
    DateFrom: null,
    DateTo: null,
    LeagueID: DEFAULTS.leagueID,
    PlayerID: DEFAULTS.playerID,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType
  }
};

export const PLAYER_GENERAL_STATS = {
  method: "playerGeneralStats",
  endpoint: "/stats/leaguedashplayerstats",
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
};

export const PLAYER_HUSTLE_STATS = {
  method: "playerHustleStats",
  endpoint: "/stats/leaguehustlestatsplayer",
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
};

export const PLAYER_HUSTLE_STATS_LEADERS = {
  method: "playerHustleStatsLeaders",
  endpoint: "/stats/leaguehustlestatsplayerleaders",
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
};

export const PLAYER_INFO = {
  method: "playerInfo",
  endpoint: "/stats/commonplayerinfo",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PlayerID: DEFAULTS.playerID
  }
};

export const PLAYER_OPPONENT_STATS = {
  method: "playerOpponentStats",
  endpoint: "/stats/leagueplayerondetails",
  defaults: {
    DateFrom: null,
    DateTo: null,
    GameSegment: DEFAULTS.gameSegment,
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
    PlusMinus: DEFAULTS.optional,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const PLAYER_PROFILE = {
  method: "playerProfile",
  endpoint: "/stats/playerprofilev2",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PerMode: DEFAULTS.perMode,
    PlayerID: DEFAULTS.playerID
  }
};

export const PLAYER_SHOT_LOCATION_STATS = {
  method: "playerShotLocationStats",
  endpoint: "/stats/leaguedashplayershotlocations",
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
};

export const PLAYER_SHOT_STATS = {
  method: "playerShotStats",
  endpoint: "/stats/leaguedashplayerptshot",
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
};

export const SCOREBOARD = {
  method: "scoreboard",
  endpoint: "/stats/scoreboardV2",
  defaults: {
    DayOffset: DEFAULTS.dayOffset,
    LeagueID: DEFAULTS.leagueID,
    gameDate: DEFAULTS.gameDate
  }
};

export const TEAM_CLUTCH_STATS = {
  method: "teamClutchStats",
  endpoint: "/stats/leaguedashteamclutch",
  defaults: {
    AheadBehind: DEFAULTS.aheadOrBehind,
    ClutchTime: DEFAULTS.clutchTime,
    Conference: DEFAULTS.conference,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    GameScope: DEFAULTS.gameScope,
    GameSegment: DEFAULTS.gameSegment,
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
    PlayerExperience: DEFAULTS.playerExperience,
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
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_DEFENSE_STATS = {
  method: "teamDefenseStats",
  endpoint: "/stats/leaguedashptteamdefend",
  defaults: {
    Conference: DEFAULTS.conference,
    DateFrom: null,
    DateTo: null,
    DefenseCategory: DEFAULTS.defenseCategory,
    Division: DEFAULTS.division,
    GameSegment: DEFAULTS.gameSegment,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PORound: DEFAULTS.playoffRound,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_DETAILS = {
  method: "teamDetails",
  endpoint: "/stats/teamdetails",
  defaults: {
    TeamID: DEFAULTS.teamID
  }
};

export const TEAM_INFO = {
  method: "teamInfo",
  endpoint: "/stats/teaminfocommon",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID
  }
};

export const TEAM_GAMELOG = {
  method: "teamGamelog",
  endpoint: "/stats/teamgamelog",
  defaults: {
    DateFrom: null,
    DateTo: null,
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID
  }
};

export const TEAM_GENERAL_STATS = {
  method: "teamGeneralStats",
  endpoint: "/stats/leaguedashteamstats",
  defaults: {
    Conference: DEFAULTS.conference,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    GameScope: null,
    GameSegment: null,
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
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_HUSTLE_STATS = {
  method: "teamHustleStats",
  endpoint: "/stats/leaguehustlestatsteam",
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
};

export const TEAM_HUSTLE_STATS_LEADERS = {
  method: "teamHustleStatsLeaders",
  endpoint: "/stats/leaguehustlestatsteamleaders",
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
};

export const TEAM_LINEUPS = {
  method: "teamLineups",
  endpoint: "/stats/teamdashlineups",
  defaults: {
    DateFrom: null,
    DateTo: null,
    GameID: DEFAULTS.gameID,
    GameSegment: DEFAULTS.gameSegment,
    GroupQuantity: DEFAULTS.groupQuantity,
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
    PlusMinus: DEFAULTS.optional,
    PORound: DEFAULTS.playoffRound,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_ON_OFF_COURT = {
  method: "teamOnOffCourtStats",
  endpoint: "/stats/teamplayeronoffdetails",
  defaults: {
    DateFrom: null,
    DateTo: null,
    GameSegment: DEFAULTS.gameSegment,
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
    PlusMinus: DEFAULTS.optional,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_PASS_TRACKING_STATS = {
  method: "teamPassTrackingStats",
  endpoint: "/stats/teamdashptpass",
  defaults: {
    DateFrom: null,
    DateTo: null,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    PerMode: DEFAULTS.perMode,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_PLAYERS = {
  method: "teamPlayers",
  endpoint: "/stats/teamplayerdashboard",
  defaults: {
    DateFrom: null,
    DateTo: null,
    GameSegment: DEFAULTS.gameSegment,
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
    PlusMinus: DEFAULTS.optional,
    PORound: DEFAULTS.playoffRound,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_REB_TRACKING_STATS = {
  method: "teamReboundTrackingStats",
  endpoint: "/stats/teamdashptreb",
  defaults: {
    DateFrom: null,
    DateTo: null,
    GameSegment: DEFAULTS.gameSegment,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_ROSTER = {
  method: "teamRoster",
  endpoint: "/stats/commonteamroster",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    Season: DEFAULTS.season,
    TeamID: DEFAULTS.teamID
  }
};

export const TEAM_SHOT_LOCATION_STATS = {
  method: "teamShotLocationStats",
  endpoint: "/stats/leaguedashteamshotlocations",
  defaults: {
    Conference: DEFAULTS.conference,
    DateFrom: null,
    DateTo: null,
    DistanceRange: DEFAULTS.distanceRange,
    Division: DEFAULTS.division,
    GameScope: null,
    GameSegment: DEFAULTS.gameSegment,
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
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_SHOT_STATS = {
  method: "teamShotStats",
  endpoint: "/stats/leaguedashteamptshot",
  defaults: {
    CloseDefDistRange: DEFAULTS.closeDefDistRange,
    Conference: DEFAULTS.conference,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DribbleRange: DEFAULTS.dribbleRange,
    GameSegment: DEFAULTS.gameSegment,
    GeneralRange: DEFAULTS.generalRange,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    PORound: DEFAULTS.playoffRound,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    ShotDistRange: DEFAULTS.shotDistRange,
    TeamID: DEFAULTS.teamID,
    TouchTimeRange: DEFAULTS.touchTimeRange,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_SHOT_TRACKING_STATS = {
  method: "teamShotTrackingStats",
  endpoint: "/stats/teamdashptshots",
  defaults: {
    DateFrom: null,
    DateTo: null,
    GameSegment: DEFAULTS.gameSegment,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    Period: DEFAULTS.period,
    PerMode: DEFAULTS.perMode,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_SPLITS = {
  method: "teamSplits",
  endpoint: "/stats/teamdashboardbygeneralsplits",
  defaults: {
    DateFrom: null,
    DateTo: null,
    GameSegment: DEFAULTS.gameSegment,
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
    PlusMinus: DEFAULTS.optional,
    PORound: DEFAULTS.playoffRound,
    Rank: DEFAULTS.optional,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    ShotClockRange: DEFAULTS.shotClockRange,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division
  }
};

export const TEAM_YEARLY_STATS = {
  method: "teamYearlyStats",
  endpoint: "/stats/teamyearbyyearstats",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    PerMode: DEFAULTS.perMode,
    SeasonType: DEFAULTS.seasonType,
    TeamID: DEFAULTS.teamID
  }
};

export const TRACKING_STATS = {
  method: "trackingStats",
  endpoint: "/stats/leaguedashptstats",
  defaults: {
    College: null,
    Conference: DEFAULTS.conference,
    Country: null,
    DateFrom: null,
    DateTo: null,
    Division: DEFAULTS.division,
    DraftPick: null,
    DraftYear: DEFAULTS.draftYear,
    GameScope: DEFAULTS.gameScope,
    Height: DEFAULTS.height,
    LastNGames: DEFAULTS.lastNGames,
    LeagueID: DEFAULTS.leagueID,
    Location: DEFAULTS.location,
    Month: DEFAULTS.month,
    OpponentTeamID: DEFAULTS.teamID,
    Outcome: DEFAULTS.outcome,
    PerMode: DEFAULTS.perMode,
    PlayerExperience: null,
    PlayerOrTeam: DEFAULTS.playerOrTeam,
    PlayerPosition: DEFAULTS.playerPosition,
    PORound: DEFAULTS.playoffRound,
    PtMeasureType: DEFAULTS.ptMeasureType,
    Season: DEFAULTS.season,
    SeasonSegment: DEFAULTS.seasonSegment,
    SeasonType: DEFAULTS.seasonType,
    StarterBench: DEFAULTS.starterBench,
    TeamID: DEFAULTS.teamID,
    VsConference: DEFAULTS.conference,
    VsDivision: DEFAULTS.division,
    Weight: DEFAULTS.weight
  }
};

export const LEAGUE_STANDINGS = {
  method: "leagueStandings",
  endpoint: "/stats/leaguestandingsv3",
  defaults: {
    LeagueID: DEFAULTS.leagueID,
    SeasonType: DEFAULTS.seasonType,
    Season: DEFAULTS.season
  }
};
