## Examples

- Import module.

  + ES5

  ```js
  const nba = require('nba.js').default;

  // OR

  const data = require('nba.js').data;
  const stats = require('nba.js').stats;
  ```

  + ES2015
  ```js
  import nba from 'nba.js';

  // OR

  import { data, stats } from 'nba.js';
  ```

- Each method responds with **both** a Promise and an error-first callback (if provided). Use whichever you prefer.

- The following snippets will demonstrate how you can use the two APIs with their various endpoints and parameters.

### <a name='stats'>Stats, `nba.stats`</a>

  - [List of methods](api/STATS.md#method-reference).

  - Get a list of all players:

    ```js
    nba.stats.allPlayers(function(err, res) {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    });
    ```

    ```js
    nba.stats.allPlayers({ IsOnlyCurrentSeason: 0 })
      .then(res => console.log(res))
      .catch(err => console.error(err));
    ```

    ```js
    nba.stats.allPlayers({ Season: '2014-15' }, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    });
    ```

### <a name='data'>Data, `nba.data`</a>

  - [List of methods](api/DATA.md#method-reference).
  
  - Get a list of standings:

    ```js
    nba.data.standings((err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    })
    ```

    - Get a list of teams from the 2016 season:

    ```js
    nba.data.teams({
      year: 2016
    }).then(function(res) {
      console.log(res);
    }).catch(function(err) {
      console.error(err);
    });
    ```
