import should from "should";
import flattenResultSet from "./flatten-result-set";

let headers = [
  "RANK",
  "PLAYER_ID",
  "PLAYER",
  "TEAM_ID",
  "TEAM_ABBREVIATION",
  "TEAM_NAME",
  "JERSEY_NUM",
  "PLAYER_POSITION",
  "PTS"
];
let rowSet = [
  [
    1,
    201939,
    "Stephen Curry",
    1610612744,
    "GSW",
    "Golden State Warriors",
    "30",
    "G",
    30.1
  ],
  [
    2,
    201935,
    "James Harden",
    1610612745,
    "HOU",
    "Houston Rockets",
    "13",
    "G",
    29.0
  ]
];
let name = "top_2_scoring_pgs";

let resultSet = [{ headers, rowSet, name }];

describe("api/stats/utils/flatten-result-set", () => {
  it("should return a Promise", done => {
    let flattened = flattenResultSet(resultSet);
    flattened.should.be.Promise();
    done();
  });

  it("should return an object hashed by resultSet name", done => {
    flattenResultSet(resultSet).then(res => {
      Object.keys(res)[0].should.eql(name);
      done();
    });
  });

  it("should not alter row values", done => {
    flattenResultSet(resultSet).then(res => {
      for (let i in rowSet) {
        Object.keys(res[name][i])
          .map(v => res[name][i][v])
          .should.eql(rowSet[i]);
      }

      done();
    });
  });

  it("should have lowercase keys", done => {
    flattenResultSet(resultSet).then(res => {
      for (let i in rowSet) {
        Object.keys(res[name][i])
          .every(v => v === v.toLowerCase())
          .should.be.true();
      }

      done();
    });
  });

  it("should flatten multiple sets and return all with `name` used as key", done => {
    flattenResultSet([
      { headers, rowSet, name },
      { headers, rowSet, name: `${name}2` }
    ]).then(res => {
      Object.keys(res).should.have.length(2);
      res.should.have.property(name);
      res.should.have.property(`${name}2`);
      done();
    });
  });

  it("should merge multiple sets with same `name` key", done => {
    flattenResultSet(resultSet.concat(resultSet)).then(res => {
      Object.keys(res).should.have.length(1);
      res.should.have.property(name);
      done();
    });
  });
});
