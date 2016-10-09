## nba.js 

[![npm version](https://badge.fury.io/js/nba.js.svg)](https://badge.fury.io/js/nba.js) [![Build Status](https://travis-ci.org/kshvmdn/nba.js.svg?branch=master)](https://travis-ci.org/kshvmdn/nba.js) [![Coverage Status](https://coveralls.io/repos/github/kshvmdn/nba.js/badge.svg?branch=master)](https://coveralls.io/github/kshvmdn/nba.js?branch=master) [![Dependency Status](https://img.shields.io/david/kshvmdn/nba.js.svg)](https://david-dm.org/kshvmdn/nba.js) ![code style : standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)

A Node.js library for current and historical NBA stats, scores, and data.

### Installation

Install via [npm](https://npmjs.com/packages/nba.js) or [download the source](https://github.com/kshvmdn/nba.js/archive/master.zip) (via GitHub) and build manually.

- npm

  ```sh
  $ npm install --save nba.js
  ```

- GitHub

  ```sh
  $ git clone https://github.com/kshvmdn/nba.js.git nba.js && cd $_ && npm install
  ```

### Usage

- Import the module.

    ```js
    const nba = require('nba.js');
    // OR
    import nba from 'nba';
    ```

### API

- Endpoint methods take 2 optional arguments - `query` and `cb`. Each will respond with either a Promise or an error-first callback (if provided) – use whichever you prefer.

  ```js
  nba.stats.allPlayers()
    .then(res => console.log(res))
    .catch(err => console.error(err));
  ```

  ```js
  nba.stats.allPlayers({}, (err, res) => {
    if (err) return console.error(err);
    console.log(res);
  });
  ```

- Supported endpoints:

  + allPlayers
    * [`/stats/commonallplayers`](http://stats.nba.com/stats/commonallplayers)
  + assistTracker
    * [`/stats/assisttracker`](http://stats.nba.com/stats/assisttracker)
  + defenseHub
    * [`/stats/defensehub`](http://stats.nba.com/stats/defensehub)
  + draftCombine
    * [`/stats/draftcombinestats`](http://stats.nba.com/stats/draftcombinestats)
  + draftHistory
    * [`/stats/drafthistory`](http://stats.nba.com/stats/drafthistory)
  + franchiseHistory
    * [`/stats/franchisehistory`](http://stats.nba.com/stats/franchisehistory)
  + franchiseLeaders
    * [`/stats/franchiseleaders`](http://stats.nba.com/stats/franchiseleaders)
  + homepage
    * [`/stats/homepagev2`](http://stats.nba.com/stats/homepagev2)
  + leagueGamelog
    * [`/stats/leaguegamelog`](http://stats.nba.com/stats/leaguegamelog)
  + leagueLeaders
    * [`/stats/leagueleaders`](http://stats.nba.com/stats/leagueleaders)
  + lineups
    * [`/stats/leaguedashlineups`](http://stats.nba.com/stats/leaguedashlineups)
  + playerAwards
    * [`/stats/playerawards`](http://stats.nba.com/stats/playerawards)
  + playerBioStats
    * [`/stats/leaguedashplayerbiostats`](http://stats.nba.com/stats/leaguedashplayerbiostats)
  + playerCareerStats
    * [`/stats/leaguedashplayerclutch`](http://stats.nba.com/stats/leaguedashplayerclutch)
  + playerClutchStats
    * [`/stats/playercareerstats`](http://stats.nba.com/stats/playercareerstats)
  + playerCompare
    * [`/stats/playercompare`](http://stats.nba.com/stats/playercompare)
  + playerDefenseStats
    * [`/stats/leaguedashptdefend`](http://stats.nba.com/stats/leaguedashptdefend)
  + playerGamelog
    * [`/stats/playergamelog`](http://stats.nba.com/stats/playergamelog)
  + playerGeneralStats
    * [`/stats/leaguedashplayerstats`](http://stats.nba.com/stats/leaguedashplayerstats)
  + playerHustleLeaders
    * [`/stats/leaguehustlestatsplayer`](http://stats.nba.com/stats/leaguehustlestatsplayer)
  + playerHustleStats
    * [`/stats/leaguehustlestatsplayerleaders`](http://stats.nba.com/stats/leaguehustlestatsplayerleaders)
  + playerInfo
    * [`/stats/commonplayerinfo`](http://stats.nba.com/stats/commonplayerinfo)
  + playerOpponentStats
    * [`/stats/leagueplayerondetails`](http://stats.nba.com/stats/leagueplayerondetails)
  + playerProfile
    * [`/stats/playerprofilev2`](http://stats.nba.com/stats/playerprofilev2)
  + playerShotLocationSta
    * [`/stats/leaguedashplayershotlocations`](http://stats.nba.com/stats/leaguedashplayershotlocations)
  + playerShotStats
    * [`/stats/leaguedashplayerptshot`](http://stats.nba.com/stats/leaguedashplayerptshot)
  + scoreboard
    * [`/stats/scoreboardV2`](http://stats.nba.com/stats/scoreboardV2)
  + teamClutchStats
    * [`/stats/leaguedashteamclutch`](http://stats.nba.com/stats/leaguedashteamclutch)
  + teamDefenseStats
    * [`/stats/leaguedashptteamdefend`](http://stats.nba.com/stats/leaguedashptteamdefend)
  + teamDetails
    * [`/stats/teamdetails`](http://stats.nba.com/stats/teamdetails)
  + teamGamelog
    * [`/stats/teaminfocommon`](http://stats.nba.com/stats/teaminfocommon)
  + teamGeneralStats
    * [`/stats/teamgamelog`](http://stats.nba.com/stats/teamgamelog)
  + teamHustleLeaders
    * [`/stats/leaguedashteamstats`](http://stats.nba.com/stats/leaguedashteamstats)
  + teamHustleStats
    * [`/stats/leaguehustlestatsteam`](http://stats.nba.com/stats/leaguehustlestatsteam)
  + teamInfo
    * [`/stats/leaguehustlestatsteamleaders`](http://stats.nba.comstats/leaguehustlestatsteamleaders)
  + teamLineups
    * [`/stats/teamdashlineups`](http://stats.nba.com/stats/teamdashlineups)
  + teamOnOffCourt
    * [`/stats/teamplayeronoffdetails`](http://stats.nba.com/stats/teamplayeronoffdetails)
  + teamPassTracking
    * [`/stats/teamdashptpass`](http://stats.nba.com/stats/teamdashptpass)
  + teamPlayers
    * [`/stats/teamplayerdashboard`](http://stats.nba.com/stats/teamplayerdashboard)
  + teamReboundTracking
    * [`/stats/teamdashptreb`](http://stats.nba.com/stats/teamdashptreb)
  + teamRoster
    * [`/stats/commonteamroster`](http://stats.nba.com/stats/commonteamroster)
  + teamShotLocationStats
    * [`/stats/leaguedashteamshotlocations`](http://stats.nba.com/stats/leaguedashteamshotlocations)
  + teamShotStats
    * [`/stats/leaguedashteamptshot`](http://stats.nba.com/stats/leaguedashteamptshot)
  + teamShotTracking
    * [`/stats/teamdashptshots`](http://stats.nba.com/stats/teamdashptshots)
  + teamSplits
    * [`/stats/teamdashboardbygeneralsplits`](http://stats.nba.com/stats/teamdashboardbygeneralsplits)
  + teamYearlyStats
    * [`/stats/teamyearbyyearstats`](http://stats.nba.com/stats/teamyearbyyearstats)
  + trackingStats
    * [`/stats/leaguedashptstats`](http://stats.nba.com/stats/leaguedashptstats)

- Query parameters:

  + More details coming soon – for the time being, you can refer to [`src/constants/endpoints.js`](src/constants/endpoints.js) for a list of parameters and valid values.

### Examples

_Coming soon._

### Contribute

This project is completely open source. Feel free to [open an issue](https://github.com/kshvmdn/nba.js/issues) or [make a pull request](https://github.com/kshvmdn/nba.js/pulls). :smile:

- To clone & build:

  ```sh
  # clone
  $ git clone https://github.com/kshvmdn/nba.js.git nba.js && cd $_ && npm install
  # build
  $ npm run build # to watch for changes, use build:watch instead
  # test
  $ npm test
  ```

- Before submitting a PR, please ensure you've added tests (if applicable) and the changes comply with the [Standard](https://github.com/feross/standard) style guide (`npm run lint`).

### License

[MIT](./LICENSE) © [Kashav Madan](http://kshvmdn.com).
