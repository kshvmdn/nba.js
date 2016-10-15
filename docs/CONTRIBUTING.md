## Contributing

### Issues

To report an issue, please [create a new issue on GitHub](https://github.com/kshvmdn/nba.js/issues). 

It's usually helpful to include any details that might be relevant to reproducing the issue (the code that causes it, the environment [Node, browser, etc], and the version of `nba.js` you're working with).

### Feature Requests

To make a feature request, open an issue on [GitHub](https://github.com/kshvmdn/nba.js/issues).

### Code Contributions

__All contributions are welcome and appreciated, make sure the tests pass and the linter is happy__. :smile:

- You'll need to fork & clone the repository to start with development.

  + Clone

    ```sh
    git clone https://github.com/{your_username}/nba.js
    cd nba.js
    ```

  + Install dependencies

    ```sh
    npm install
    ```

- To build (transpile) the source:

  ```sh
  npm run build # use build:watch to watch for changes in src/
  ```

- To run tests:

  ```sh
  npm run test
  ```

- For bugfixes and new features, it'd be appreciated if you added some sort of regression tests (if applicable). 

- Code style is enforced by [ESLint](http://eslint.org/) with the [Standard](https://github.com/feross/standard) guide for JavaScript code. To run the linter:

  ```sh
  npm run lint
  ```
