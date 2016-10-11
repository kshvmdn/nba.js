### API : Stats

> API documentation for `nba.stats`.

#### Method Reference

- allPlayers
  + Endpoint: [`/stats/commonallplayers`](http://stats.nba.com//stats/commonallplayers)
  + Parameters:
    * IsOnlyCurrentSeason
    * LeagueID
    * Season
  
- assistTracker
  + Endpoint: [`/stats/assisttracker`](http://stats.nba.com//stats/assisttracker)
  + Parameters:
    * PerMode
    * LeagueID
    * Season
    * SeasonType
    * PORound
    * Outcome
    * Location
    * Month
    * SeasonSegment
    * DateFrom
    * DateTo
    * OpponentTeamID
    * VsConference
    * VsDivision
    * TeamID
    * Conference
    * Division
    * LastNGames
    * GameScope
    * PlayerExperience
    * PlayerPosition
    * StarterBench
    * DraftYear
    * DraftPick
    * College
    * Country
    * Height
    * Weight
  
- defenseHub
  + Endpoint: [`/stats/defensehub`](http://stats.nba.com//stats/defensehub)
  + Parameters:
    * GameScope
    * LeagueID
    * PlayerOrTeam
    * PlayerScope
    * Season
    * SeasonType
  
- draftCombine
  + Endpoint: [`/stats/draftcombinestats`](http://stats.nba.com//stats/draftcombinestats)
  + Parameters:
    * LeagueID
    * SeasonYear
  
- draftHistory
  + Endpoint: [`/stats/drafthistory`](http://stats.nba.com//stats/drafthistory)
  + Parameters:
    * College
    * LeagueID
    * OverallPick
    * RoundNum
    * RoundPick
    * Season
    * TeamID
    * TopX
  
- franchiseHistory
  + Endpoint: [`/stats/franchisehistory`](http://stats.nba.com//stats/franchisehistory)
  + Parameters:
    * LeagueID
  
- franchiseLeaders
  + Endpoint: [`/stats/franchiseleaders`](http://stats.nba.com//stats/franchiseleaders)
  + Parameters:
    * LeagueID
    * TeamID
  
- homepage
  + Endpoint: [`/stats/homepagev2`](http://stats.nba.com//stats/homepagev2)
  + Parameters:
    * GameScope
    * LeagueID
    * PlayerOrTeam
    * PlayerScope
    * Season
    * SeasonType
    * StatType
  
- leagueGamelog
  + Endpoint: [`/stats/leaguegamelog`](http://stats.nba.com//stats/leaguegamelog)
  + Parameters:
    * Counter
    * DateFrom
    * DateTo
    * Direction
    * LeagueID
    * PlayerOrTeam
    * Season
    * SeasonType
    * Sorter
  
- leagueLeaders
  + Endpoint: [`/stats/leagueleaders`](http://stats.nba.com//stats/leagueleaders)
  + Parameters:
    * LeagueID
    * PerMode
    * Scope
    * Season
    * SeasonType
    * StatCategory
  
- lineups
  + Endpoint: [`/stats/leaguedashlineups`](http://stats.nba.com//stats/leaguedashlineups)
  + Parameters:
    * Conference
    * DateFrom
    * DateTo
    * Division
    * GameSegment
    * GroupQuantity
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * TeamID
    * VsConference
    * VsDivision
  
- playerAwards
  + Endpoint: [`/stats/playerawards`](http://stats.nba.com//stats/playerawards)
  + Parameters:
    * PlayerID
  
- playerBioStats
  + Endpoint: [`/stats/leaguedashplayerbiostats`](http://stats.nba.com//stats/leaguedashplayerbiostats)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * GameScope
    * GameSegment
    * Height
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- playerClutchStats
  + Endpoint: [`/stats/leaguedashplayerclutch`](http://stats.nba.com//stats/leaguedashplayerclutch)
  + Parameters:
    * AheadBehind
    * ClutchTime
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * GameScope
    * GameSegment
    * Height
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PlusMinus
    * PointDiff
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- playerCareerStats
  + Endpoint: [`/stats/playercareerstats`](http://stats.nba.com//stats/playercareerstats)
  + Parameters:
    * LeagueID
    * PerMode
    * PlayerID
  
- playerCompare
  + Endpoint: [`/stats/playercompare`](http://stats.nba.com//stats/playercompare)
  + Parameters:
    * Conference
    * DateFrom
    * DateTo
    * Division
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * PerMode
    * Period
    * PlayerIDList
    * PlusMinus
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * VsConference
    * VsDivision
    * VsPlayerIDList
  
- playerDefenseStats
  + Endpoint: [`/stats/leaguedashptdefend`](http://stats.nba.com//stats/leaguedashptdefend)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * DefenseCategory
    * Division
    * DraftPick
    * DraftYear
    * GameSegment
    * Height
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * Period
    * PerMode
    * PlayerExperience
    * PlayerID
    * PlayerPosition
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- playerGamelog
  + Endpoint: [`/stats/playergamelog`](http://stats.nba.com//stats/playergamelog)
  + Parameters:
    * DateFrom
    * DateTo
    * LeagueID
    * PlayerID
    * Season
    * SeasonType
  
- playerGeneralStats
  + Endpoint: [`/stats/leaguedashplayerstats`](http://stats.nba.com//stats/leaguedashplayerstats)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * GameScope
    * GameSegment
    * Height
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- playerHustleStats
  + Endpoint: [`/stats/leaguehustlestatsplayer`](http://stats.nba.com//stats/leaguehustlestatsplayer)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * Height
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- playerHustleStatsLeaders
  + Endpoint: [`/stats/leaguehustlestatsplayerleaders`](http://stats.nba.com//stats/leaguehustlestatsplayerleaders)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * Height
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- playerInfo
  + Endpoint: [`/stats/commonplayerinfo`](http://stats.nba.com//stats/commonplayerinfo)
  + Parameters:
    * LeagueID
    * PlayerID
  
- playerOpponentStats
  + Endpoint: [`/stats/leagueplayerondetails`](http://stats.nba.com//stats/leagueplayerondetails)
  + Parameters:
    * DateFrom
    * DateTo
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlusMinus
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
  
- playerProfile
  + Endpoint: [`/stats/playerprofilev2`](http://stats.nba.com//stats/playerprofilev2)
  + Parameters:
    * LeagueID
    * PerMode
    * PlayerID
  
- playerShotLocationStats
  + Endpoint: [`/stats/leaguedashplayershotlocations`](http://stats.nba.com//stats/leaguedashplayershotlocations)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * DistanceRange
    * Division
    * DraftPick
    * DraftYear
    * GameScope
    * GameSegment
    * Height
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- playerShotStats
  + Endpoint: [`/stats/leaguedashplayerptshot`](http://stats.nba.com//stats/leaguedashplayerptshot)
  + Parameters:
    * CloseDefDistRange
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * DribbleRange
    * GameSegment
    * GeneralRange
    * Height
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * ShotDistRange
    * StarterBench
    * TeamID
    * TouchTimeRange
    * VsConference
    * VsDivision
    * Weight
  
- scoreboard
  + Endpoint: [`/stats/scoreboardV2`](http://stats.nba.com//stats/scoreboardV2)
  + Parameters:
    * DayOffset
    * LeagueID
    * gameDate
  
- teamClutchStats
  + Endpoint: [`/stats/leaguedashteamclutch`](http://stats.nba.com//stats/leaguedashteamclutch)
  + Parameters:
    * AheadBehind
    * ClutchTime
    * Conference
    * DateFrom
    * DateTo
    * Division
    * GameScope
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PlusMinus
    * PointDiff
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
  
- teamDefenseStats
  + Endpoint: [`/stats/leaguedashptteamdefend`](http://stats.nba.com//stats/leaguedashptteamdefend)
  + Parameters:
    * Conference
    * DateFrom
    * DateTo
    * DefenseCategory
    * Division
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * Period
    * PerMode
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
  
- teamDetails
  + Endpoint: [`/stats/teamdetails`](http://stats.nba.com//stats/teamdetails)
  + Parameters:
    * TeamID
  
- teamInfo
  + Endpoint: [`/stats/teaminfocommon`](http://stats.nba.com//stats/teaminfocommon)
  + Parameters:
    * LeagueID
    * Season
    * SeasonType
    * TeamID
  
- teamGamelog
  + Endpoint: [`/stats/teamgamelog`](http://stats.nba.com//stats/teamgamelog)
  + Parameters:
    * DateFrom
    * DateTo
    * LeagueID
    * Season
    * SeasonType
    * TeamID
  
- teamGeneralStats
  + Endpoint: [`/stats/leaguedashteamstats`](http://stats.nba.com//stats/leaguedashteamstats)
  + Parameters:
    * Conference
    * DateFrom
    * DateTo
    * Division
    * GameScope
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
  
- teamHustleStats
  + Endpoint: [`/stats/leaguehustlestatsteam`](http://stats.nba.com//stats/leaguehustlestatsteam)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * Height
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- teamHustleStatsLeaders
  + Endpoint: [`/stats/leaguehustlestatsteamleaders`](http://stats.nba.com//stats/leaguehustlestatsteamleaders)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * Height
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  
- teamLineups
  + Endpoint: [`/stats/teamdashlineups`](http://stats.nba.com//stats/teamdashlineups)
  + Parameters:
    * DateFrom
    * DateTo
    * GameID
    * GameSegment
    * GroupQuantity
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * TeamID
    * VsConference
    * VsDivision
  
- teamOnOffCourtStats
  + Endpoint: [`/stats/teamplayeronoffdetails`](http://stats.nba.com//stats/teamplayeronoffdetails)
  + Parameters:
    * DateFrom
    * DateTo
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlusMinus
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * TeamID
    * VsConference
    * VsDivision
  
- teamPassTrackingStats
  + Endpoint: [`/stats/teamdashptpass`](http://stats.nba.com//stats/teamdashptpass)
  + Parameters:
    * DateFrom
    * DateTo
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * PerMode
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
  
- teamPlayers
  + Endpoint: [`/stats/teamplayerdashboard`](http://stats.nba.com//stats/teamplayerdashboard)
  + Parameters:
    * DateFrom
    * DateTo
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * TeamID
    * VsConference
    * VsDivision
  
- teamReboundTrackingStats
  + Endpoint: [`/stats/teamdashptreb`](http://stats.nba.com//stats/teamdashptreb)
  + Parameters:
    * DateFrom
    * DateTo
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * Period
    * PerMode
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
  
- teamRoster
  + Endpoint: [`/stats/commonteamroster`](http://stats.nba.com//stats/commonteamroster)
  + Parameters:
    * LeagueID
    * Season
    * TeamID
  
- teamShotLocationStats
  + Endpoint: [`/stats/leaguedashteamshotlocations`](http://stats.nba.com//stats/leaguedashteamshotlocations)
  + Parameters:
    * Conference
    * DateFrom
    * DateTo
    * DistanceRange
    * Division
    * GameScope
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlayerExperience
    * PlayerPosition
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
  
- teamShotStats
  + Endpoint: [`/stats/leaguedashteamptshot`](http://stats.nba.com//stats/leaguedashteamptshot)
  + Parameters:
    * CloseDefDistRange
    * Conference
    * DateFrom
    * DateTo
    * Division
    * DribbleRange
    * GameSegment
    * GeneralRange
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * Period
    * PerMode
    * PORound
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * ShotDistRange
    * TeamID
    * TouchTimeRange
    * VsConference
    * VsDivision
  
- teamShotTrackingStats
  + Endpoint: [`/stats/teamdashptshots`](http://stats.nba.com//stats/teamdashptshots)
  + Parameters:
    * DateFrom
    * DateTo
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * Period
    * PerMode
    * Season
    * SeasonSegment
    * SeasonType
    * TeamID
    * VsConference
    * VsDivision
  
- teamSplits
  + Endpoint: [`/stats/teamdashboardbygeneralsplits`](http://stats.nba.com//stats/teamdashboardbygeneralsplits)
  + Parameters:
    * DateFrom
    * DateTo
    * GameSegment
    * LastNGames
    * LeagueID
    * Location
    * MeasureType
    * Month
    * OpponentTeamID
    * Outcome
    * PaceAdjust
    * Period
    * PerMode
    * PlusMinus
    * PORound
    * Rank
    * Season
    * SeasonSegment
    * SeasonType
    * ShotClockRange
    * TeamID
    * VsConference
    * VsDivision
  
- teamYearlyStats
  + Endpoint: [`/stats/teamyearbyyearstats`](http://stats.nba.com//stats/teamyearbyyearstats)
  + Parameters:
    * LeagueID
    * PerMode
    * SeasonType
    * TeamID
  
- trackingStats
  + Endpoint: [`/stats/leaguedashptstats`](http://stats.nba.com//stats/leaguedashptstats)
  + Parameters:
    * College
    * Conference
    * Country
    * DateFrom
    * DateTo
    * Division
    * DraftPick
    * DraftYear
    * GameScope
    * Height
    * LastNGames
    * LeagueID
    * Location
    * Month
    * OpponentTeamID
    * Outcome
    * PerMode
    * PlayerExperience
    * PlayerOrTeam
    * PlayerPosition
    * PORound
    * PtMeasureType
    * Season
    * SeasonSegment
    * SeasonType
    * StarterBench
    * TeamID
    * VsConference
    * VsDivision
    * Weight
  

  
#### Paramter Reference

- _TODO_

#### Examples

See [`EXAMPLES.md`](../EXAMPLES.md#stats).
