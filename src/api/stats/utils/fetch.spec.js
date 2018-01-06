import should from "should";
import fetch from "./fetch";

let endpoint = "/stats/homepagev2";
let query = {
  GameScope: "Season",
  LeagueID: "00",
  PlayerOrTeam: "Player",
  PlayerScope: "All Players",
  Season: "2015-16",
  SeasonType: "Regular Season",
  StatType: "Traditional"
};

describe("api/stats/utils/fetch", () => {
  it("should return response/error as a Promise", done => {
    let request = fetch(endpoint, { query });
    request.should.be.Promise();
    done();
  });

  it("should throw 400 on invalid request", done => {
    let request = fetch(endpoint, { query: {} });

    request.catch(err => {
      should.exist(err);
      err.statusCode.should.equal(400);
      done();
    });
  });

  it("should support full URLs as `endpoint` parameter", done => {
    let request = fetch("http://stats.nba.com/stats/teamdetails", {
      query: { teamId: 1610612741 }
    });

    request.then(res => {
      should.exist(res);
      done();
    });

    request.catch(err => {
      should.exist(err);
      done();
    });
  });
});
