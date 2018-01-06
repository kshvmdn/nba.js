import should from "should";
import * as worker from "./endpoint-worker";
import { DEFAULTS as e } from "./../constants";

let w = worker.work;

describe("api/stats/utils/endpoint-worker", () => {
  it("should respond with a Promise", done => {
    w(e.ALL_PLAYERS, null).should.be.Promise();
    done();
  });

  it("should respond with an error-first cb", done => {
    w(e.ALL_PLAYERS, null, (err, res) => {
      should.not.exist(err);
      should.exist(res);
      done();
    });
  });

  it("should throw HTTPError when invalid query params are provided", done => {
    w(e.PLAYER_AWARDS, null, (err, res) => {
      should.exist(err);
      err.should.have.property("body");
      err.body.should.eql(
        "The field PlayerID must be between 1 and 2147483647."
      );
      done();
    });
  });
});
