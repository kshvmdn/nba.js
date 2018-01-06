import should from "should";
import { work as w } from "./worker";

const ENDPOINT = "/data/10s/prod/v1/current/standings_all.json";

describe("api/data/utils/worker", () => {
  it("should respond with a Promise", done => {
    w(ENDPOINT).should.be.Promise();
    done();
  });

  it("should respond with an error-first cb", done => {
    w(ENDPOINT, (err, res) => {
      should.not.exist(err);
      should.exist(res);
      done();
    });
  });

  it("should throw HTTPError on invalid request", done => {
    w("FOOBAR", (err, res) => {
      should.exist(err);
      err.should.have.property("message");
      err.message.should.eql("Response code 404 (Not Found)");
      done();
    });
  });
});
