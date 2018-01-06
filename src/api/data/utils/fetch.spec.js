import should from "should";
import fetch from "./fetch";

const ENDPOINT = "/data/10s/prod/v1/scoreboard.json";

describe("api/data/utils/fetch", () => {
  it("should return response/error as a Promise", done => {
    let request = fetch(ENDPOINT);
    request.should.be.Promise();
    done();
  });

  it("should respond with response/error", done => {
    let request = fetch(ENDPOINT);

    request.then(res => {
      should.exist(res);
      done();
    });

    request.catch(err => {
      should.exist(err);
      done();
    });
  });

  it("should throw 404 on invalid request", done => {
    let request = fetch("FOOBAR");

    request.catch(err => {
      should.exist(err);
      err.statusCode.should.equal(404);
      done();
    });
  });

  it("should support full URLs as `endpoint` parameter", done => {
    let request = fetch(`http://data.nba.net${ENDPOINT}`);

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
