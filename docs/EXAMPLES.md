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

### Stats

  - `nba.stats`

  - [List of methods](api/STATS.md#method-reference).

  - Get a list of all players:

  ```js
  nba.stats.allPlayers((err, res) => {
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
  nba.stats.allPlayers({ Season: '2014-2015' }, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(res);
  });
  ```

### Data

  - `nba.data`

  - [List of methods](api/DATA.md#method-reference).
