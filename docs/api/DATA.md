## API: Data

* The `nba.data` object provides access to endpoints from
  [data.nba.net](http://data.nba.net/).
* For this endpoint, if a method has a parameter, it is **required**.

### Method Reference

* `calendar`

  * Endpoint:
    [`/data/10s/prod/v1/calendar.json`](http://data.nba.net/data/10s/prod/v1/calendar.json)

* `scoreboard`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/scoreboard.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/scoreboard.json)
  * Parameters:
    * `date`

* `teams`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/teams.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/teams.json)
  * Parameters:
    * `year`

* `players`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/players.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/players.json)
  * Parameters:
    * `year`

* `coaches`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/coaches.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/coaches.json)
  * Parameters:
    * `year`

* `schedule`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/schedule.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/schedule.json)
  * Parameters:
    * `year`

* `conferenceStandings`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/standings_conference.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/standings_conference.json)

* `divisionStandings`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/standings_division.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/standings_division.json)

* `standings`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/standings_all.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/standings_all.json)

* `miniStandings`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/standings_all_no_sort_keys.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/standings_all_no_sort_keys.json)

* `teamStatsLeaders`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/team_stats_rankings.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/team_stats_rankings.json)
  * Parameters:
    * `year`

* `lastFiveGameTeamStats`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/team_stats_last_five_games.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/team_stats_last_five_games.json)
  * Parameters:
    * `year`

* `previewArticle`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/{{gameId}}_preview_article.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/{{gameId}}_preview_article.json)
  * Parameters:
    * `date`
    * `gameId`

* `recapArticle`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/{{gameId}}_recap_article.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/{{gameId}}_recap_article.json)
  * Parameters:
    * `date`
    * `gameId`

* `boxscore`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/{{gameId}}_boxscore.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/{{gameId}}_boxscore.json)
  * Parameters:
    * `date`
    * `gameId`

* `miniBoxscore`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/{{gameId}}_mini_boxscore.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/{{gameId}}_mini_boxscore.json)
  * Parameters:
    * `date`
    * `gameId`

* `pbp`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/{{gameId}}_pbp_{{period}}.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/{{gameId}}_pbp_{{period}}.json)
  * Parameters:
    * `date`
    * `gameId`
    * `period`

* `leadTracker`

  * Endpoint:
    [`/data/10s/prod/v1/{{date}}/{{gameId}}_lead_tracker_{{period}}.json`](http://data.nba.net/data/10s/prod/v1/{{date}}/{{gameId}}_lead_tracker_{{period}}.json)
  * Parameters:
    * `date`
    * `gameId`
    * `period`

* `playerGamelog`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/players/{{personId}}_gamelog.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/players/{{personId}}_gamelog.json)
  * Parameters:
    * `year`
    * `personId`

* `playerProfile`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/players/{{personId}}_profile.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/players/{{personId}}_profile.json)
  * Parameters:
    * `year`
    * `personId`

* `playerUberStats`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/players/{{personId}}_uber_stats.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/players/{{personId}}_uber_stats.json)
  * Parameters:
    * `year`
    * `personId`

* `playoffsBracket`
  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/playoffsBracket.json`](https://data.nba.net/data/10s/prod/v1/{{year}}/playoffsBracket.json)
  * Parameters:
    * `year`

* `teamSchedule`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/teams/{{teamName}}/schedule.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/teams/{{teamName}}/schedule.json)
  * Parameters:
    * `year`
    * `teamName`

* `teamsConfig`

  * Endpoint:
    [`/data/1h/prod/{{year}}/teams_config.json`](http://data.nba.net/data/1h/prod/{{year}}/teams_config.json)
  * Parameters:
    * `year`

* `teamRoster`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/teams/{{teamName}}/roster.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/teams/{{teamName}}/roster.json)
  * Parameters:
    * `year`
    * `teamName`

* `teamsConfigYear`

  * Endpoint:
    [`/data/1h/prod/{{year}}/teams_config.json`](http://data.nba.net/data/1h/prod/{{year}}/teams_config.json)
  * Parameters:
    * `year`

* `teamScheduleYear`

  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/teams/{{teamName}}/schedule.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/teams/{{teamName}}/schedule.json)
  * Parameters:
    * `year`
    * `teamName`

* `teamLeaders`
  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/teams/{{teamName}}/leaders.json`](http://data.nba.net/data/10s/prod/v1/{{year}}/teams/{{teamName}}/leaders.json)
  * Parameters:
    * `year`
    * `teamName`

* `teamStatsRankings`
  * Endpoint:
    [`/data/10s/prod/v1/{{year}}/team_stats_rankings.json`](https://data.nba.net/data/10s/prod/v1/{{year}}/team_stats_rankings.json)
  * Parameters:
    * `year`

### Parameter Reference

* `date`

  * `"YYYYMMDD"` (or `"current"` for the current date for every method but
    `scoreboard`)

* `year`

  * `"YYYY"`

* `gameId`

  * Can be found on the gamepage. Currently looking for a source for these IDs
    (or just a method for how they're formed, _they seem to be completely
    random_). **A PR/contribution would be very appreciated.**

* `period`

  * `1`
  * `2`
  * `3`
  * `4`
  * `4+n` for OT`n` (e.g. `5` for OT1)

* `personId`

  * Via [player page](http://www.nba.com/players).
  * E.g. `2544` for http://www.nba.com/players/lebron/james/2544.
  * You can find a list of all players and their respective `personId`
    [here](https://gist.github.com/kshvmdn/5946cf62a4081be2a6a23fa1cedbfba4).

* `teamName`

  * Via [team page](http://www.nba.com/teams/).
  * E.g. `bulls` for http://www.nba.com/teams/bulls.
  * Valid values for the 2016 season:
  * Western Conference Teams

    * Southwest

      * `mavericks`
      * `rockets`
      * `grizzlies`
      * `pelicans`
      * `spurs`

    * Northwest

      * `nuggets`
      * `timberwolves`
      * `thunder`
      * `blazers`
      * `jazz`

    * Pacific
      * `warriors`
      * `clippers`
      * `lakers`
      * `suns`
      * `kings`

  * Eastern Conference Teams

    * Atlantic

      * `celtics`
      * `nets`
      * `knicks`
      * `sixers`
      * `raptors`

    * Central

      * `bulls`
      * `cavaliers`
      * `pistons`
      * `pacers`
      * `bucks`

    * Southeast
      * `hawks`
      * `hornets`
      * `heat`
      * `magic`
      * `wizards`

  * Preseason only teams
  * `fcbarcelona`
  * `san_lorenzo`
  * `maccabi_haifa`
  * `real_madrid`
  * `shanghai_sharks`

### Examples

See [EXAMPLES.md](../EXAMPLES.md#data).
