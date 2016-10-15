## API: Data

### Method Reference

- `calendar`
  + Endpoint: [`/data/10s/prod/v1/calendar.json`](http://data.nba.net//data/10s/prod/v1/calendar.json)

- `scoreboard`
  + Endpoint: [`/data/10s/prod/v1/scoreboard.json`](http://data.nba.net//data/10s/prod/v1/scoreboard.json)

- `teams`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/teams.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/teams.json)
  + Parameters:
    * `year`

- `players`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/players.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/players.json)
  + Parameters:
    * `year`

- `coaches`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/coaches.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/coaches.json)
  + Parameters:
    * `year`

- `schedule`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/schedule.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/schedule.json)
  + Parameters:
    * `year`

- `conferenceStandings`
  + Endpoint: [`/data/10s/prod/v1/current/standings_conference.json`](http://data.nba.net//data/10s/prod/v1/current/standings_conference.json)

- `divisionStandings`
  + Endpoint: [`/data/10s/prod/v1/current/standings_division.json`](http://data.nba.net//data/10s/prod/v1/current/standings_division.json)

- `standings`
  + Endpoint: [`/data/10s/prod/v1/current/standings_all.json`](http://data.nba.net//data/10s/prod/v1/current/standings_all.json)

- `miniStandings`
  + Endpoint: [`/data/10s/prod/v1/current/standings_all_no_sort_keys.json`](http://data.nba.net//data/10s/prod/v1/current/standings_all_no_sort_keys.json)

- `teamStatsLeaders`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/team_stats_rankings.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/team_stats_rankings.json)
  + Parameters:
    * `year`

- `lastFiveGameTeamStats`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/team_stats_last_five_games.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/team_stats_last_five_games.json)
  + Parameters:
    * `year`

- `previewArticle`
  + Endpoint: [`/data/10s/prod/v1/{{gameDate}}/{{gameId}}_preview_article.json`](http://data.nba.net//data/10s/prod/v1/{{gameDate}}/{{gameId}}_preview_article.json)
  + Parameters:
    * `gameDate`
    * `gameId`

- `recapArticle`
  + Endpoint: [`/data/10s/prod/v1/{{gameDate}}/{{gameId}}_recap_article.json`](http://data.nba.net//data/10s/prod/v1/{{gameDate}}/{{gameId}}_recap_article.json)
  + Parameters:
    * `gameDate`
    * `gameId`

- `boxscore`
  + Endpoint: [`/data/10s/prod/v1/{{gameDate}}/{{gameId}}_boxscore.json`](http://data.nba.net//data/10s/prod/v1/{{gameDate}}/{{gameId}}_boxscore.json)
  + Parameters:
    * `gameDate`
    * `gameId`

- `miniBoxscore`
  + Endpoint: [`/data/10s/prod/v1/{{gameDate}}/{{gameId}}_mini_boxscore.json`](http://data.nba.net//data/10s/prod/v1/{{gameDate}}/{{gameId}}_mini_boxscore.json)
  + Parameters:
    * `gameDate`
    * `gameId`

- `pbp`
  + Endpoint: [`/data/10s/prod/v1/{{gameDate}}/{{gameId}}_pbp_{{periodNum}}.json`](http://data.nba.net//data/10s/prod/v1/{{gameDate}}/{{gameId}}_pbp_{{periodNum}}.json)
  + Parameters:
    * `gameDate`
    * `gameId`
    * `periodNum`

- `leadTracker`
  + Endpoint: [`/data/10s/prod/v1/{{gameDate}}/{{gameId}}_lead_tracker_{{periodNum}}.json`](http://data.nba.net//data/10s/prod/v1/{{gameDate}}/{{gameId}}_lead_tracker_{{periodNum}}.json)
  + Parameters:
    * `gameDate`
    * `gameId`
    * `periodNum`

- `playerGamelog`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/players/{{personId}}_gamelog.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/players/{{personId}}_gamelog.json)
  + Parameters:
    * `year`
    * `personId`

- `playerProfile`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/players/{{personId}}_profile.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/players/{{personId}}_profile.json)
  + Parameters:
    * `year`
    * `personId`

- `playerUberStats`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/players/{{personId}}_uber_stats.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/players/{{personId}}_uber_stats.json)
  + Parameters:
    * `year`
    * `personId`

- `teamSchedule`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/teams/{{teamUrlCode}}/schedule.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/teams/{{teamUrlCode}}/schedule.json)
  + Parameters:
    * `year`
    * `teamUrlCode`

- `teamsConfig`
  + Endpoint: [`/data/1h/prod/{{year}}/teams_config.json`](http://data.nba.net//data/1h/prod/{{year}}/teams_config.json)
  + Parameters:
    * `year`

- `teamRoster`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/teams/{{teamUrlCode}}/roster.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/teams/{{teamUrlCode}}/roster.json)
  + Parameters:
    * `year`
    * `teamUrlCode`

- `teamsConfigYear`
  + Endpoint: [`/data/1h/prod/{{seasonScheduleYear}}/teams_config.json`](http://data.nba.net//data/1h/prod/{{seasonScheduleYear}}/teams_config.json)
  + Parameters:
    * `seasonScheduleYear`

- `teamScheduleYear`
  + Endpoint: [`/data/10s/prod/v1/{{seasonScheduleYear}}/teams/{{teamUrlCode}}/schedule.json`](http://data.nba.net//data/10s/prod/v1/{{seasonScheduleYear}}/teams/{{teamUrlCode}}/schedule.json)
  + Parameters:
    * `seasonScheduleYear`
    * `teamUrlCode`

- `teamLeaders`
  + Endpoint: [`/data/10s/prod/v1/{{year}}/teams/{{teamUrlCode}}/leaders.json`](http://data.nba.net//data/10s/prod/v1/{{year}}/teams/{{teamUrlCode}}/leaders.json)
  + Parameters:
    * `year`
    * `teamUrlCode`

### Examples

See [EXAMPLES.md](../EXAMPLES.md#data).
