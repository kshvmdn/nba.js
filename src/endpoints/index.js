import { run } from './../utils/endpointRunner'
import { work } from './../utils/endpointWorker'
import { ENDPOINTS } from './../constants' // eslint-disable-line no-unused-vars

const nba = run(work)

/* PLAYERS ********************************************************************/
const allPlayers = (query, cb) => nba('ALL_PLAYERS', query, cb)
const playerAwards = (query, cb) => nba('PLAYER_AWARDS', query, cb)
const playerCareerStats = (query, cb) => nba('PLAYER_CAREER_STATS', query, cb)
const playerGamelog = (query, cb) => nba('PLAYER_GAMELOG', query, cb)
const playerInfo = (query, cb) => nba('PLAYER_INFO', query, cb)
const playerProfile = (query, cb) => nba('PLAYER_PROFILE', query, cb)
const leagueLeaders = (query, cb) => nba('LEAGUE_LEADERS', query, cb)

/* TEAMS **********************************************************************/

/* MISC. **********************************************************************/
const assistTracker = (query, cb) => nba('ASSIST_TRACKER', query, cb)
const defenseHub = (query, cb) => nba('DEFENSE_HUB', query, cb)
const draftCombine = (query, cb) => nba('DRAFT_COMBINE', query, cb)
const draftHistory = (query, cb) => nba('DRAFT_HISTORY', query, cb)
const franchiseHistory = (query, cb) => nba('FRANCHISE_HISTORY', query, cb)
const homepage = (query, cb) => nba('HOMEPAGE', query, cb)
const playerCompare = (query, cb) => nba('PLAYER_COMPARE', query, cb)
const scoreboard = (query, cb) => nba('SCOREBOARD', query, cb)

export {
  allPlayers,
  playerAwards,
  playerCareerStats,
  playerGamelog,
  playerInfo,
  playerProfile,
  leagueLeaders,

  assistTracker,
  defenseHub,
  draftCombine,
  draftHistory,
  franchiseHistory,
  homepage,
  playerCompare,
  scoreboard
}
