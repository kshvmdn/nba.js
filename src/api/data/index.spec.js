import should from "should";

import e from "./";
import { ENDPOINTS as c } from "./constants";

describe("api/data/index", () => {
  describe("exports", () => {
    it("should export a functon for each ENDPOINT constants", done => {
      should.equal(Object.keys(c).length, Object.keys(e).length);
      done();
    });

    it("should only export functions", done => {
      Object.keys(e)
        .every(o => typeof e[o] === "function")
        .should.be.true();
      done();
    });

    it("should not export endpoint runner", done => {
      e.should.not.have.property("nba");
      done();
    });
  });

  describe("requests", () => {
    it("should respond with a Promise", done => {
      let request = e.calendar();
      request.should.be.Promise();
      done();
    });

    it("should respond with error-first callback", done => {
      e.calendar((err, res) => {
        should.exist(res);
        should.not.exist(err);
        done();
      });
    });
  });
});
