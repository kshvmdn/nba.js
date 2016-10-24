## Usage

### Method Design

  - Each API method will take 2 _optional_ parameters:

    + query

      * Query parameters for the given request. Refer to [this](#methods-parameters) for the list of methods and their accepted parameters. __Some methods may require this parameter__ (the APIs will throw a `400` error if a required parameter is missing).

    + cb

      * Optional error-first callback for your request.

  - Whether or not a callback is provided, the request will return a standard Promise, use whichever you prefer.

    ```js
    const nba = require('nba').default;

    nba.stats.allPlayers().then(res => {
      console.log(res)
    });

    // this also works
    nba.stats.allPlayers(function(err, res) {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    });

    // not sure why you'd do this, but it also works
    nba.stats.allPlayers((err, res) => {
      console.log(res)
    }).then(res => {
      console.log(res)
    });
    ```

### Method Parameters

  - Each method will take a more-or-less unique set of query parameters.
  - The list of methods and accepted query parameters for each API can be found in [DATA.md](api/DATA.md) and [STATS.md](api/STATS.md).
