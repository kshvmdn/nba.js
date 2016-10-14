## Usage: Examples

```js
const nba = require('nba.js').default;
```

- Each API method will respond with **both** a Promise and an error-first callback. Use whichever you prefer.
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
