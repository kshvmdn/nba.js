import { run } from './../utils/endpointRunner'
import { work } from './../utils/endpointWorker'
import { ENDPOINTS } from './../constants' // eslint-disable-line no-unused-vars

const nba = run(work)

export const allPlayers = (query, cb) => nba('ALL_PLAYERS', query, cb)
export const assistTracker = (query, cb) => nba('ASSIST_TRACKER', query, cb)
export const defenseHub = (query, cb) => nba('DEFENSE_HUB', query, cb)
export const draftCombine = (query, cb) => nba('DRAFT_COMBINE', query, cb)
export const draftHistory = (query, cb) => nba('DRAFT_HISTORY', query, cb)
export const franchiseHistory = (query, cb) => nba('FRANCHISE_HISTORY', query, cb)
export const homepage = (query, cb) => nba('HOMEPAGE', query, cb)
export const hustleStatsPlayerLeaders = (query, cb) => nba('HUSTLE_STATS_PLAYER_LEADERS', query, cb)
export const hustleStatsTeamLeaders = (query, cb) => nba('HUSTLE_STATS_TEAM_LEADERS', query, cb)
export const leagueLeaders = (query, cb) => nba('LEAGUE_LEADERS', query, cb)
export const playerAwards = (query, cb) => nba('PLAYER_AWARDS', query, cb)
export const playerCareerStats = (query, cb) => nba('PLAYER_CAREER_STATS', query, cb)
export const playerCompare = (query, cb) => nba('PLAYER_COMPARE', query, cb)
export const playerGamelog = (query, cb) => nba('PLAYER_GAMELOG', query, cb)
export const playerInfo = (query, cb) => nba('PLAYER_INFO', query, cb)
export const playerProfile = (query, cb) => nba('PLAYER_PROFILE', query, cb)
export const scoreboard = (query, cb) => nba('SCOREBOARD', query, cb)
