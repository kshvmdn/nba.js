import should from "should";
import * as runner from "./endpoint-runner";
import * as worker from "./endpoint-worker";

let r = runner.run(worker.work);

describe("api/stats/utils/endpoint-runner", () => {
  it("should error out if no worker is provided", done => {
    runner.run()(null, null, (err, res) => {
      should.exist(err);
      err.should.have.property("message");
      err.message.should.eql("Expected worker function.");
      done();
    });
  });

  it("should error out when an invalid endpoint is provided", done => {
    r("INVALID_ENDPOINT", null, (err, res) => {
      should.exist(err);
      err.should.have.property("message");
      err.message.should.eql("Invalid endpoint type.");
      done();
    }).catch(e => e);
  });

  it("should respond with Promise", done => {
    r("ALL_PLAYERS", null).should.be.Promise();
    done();
  });

  it("should respond with error-first callback", done => {
    r("ALL_PLAYERS", null, (err, res) => {
      should.not.exist(err);
      should.exist(res);
      done();
    });
  });
});
