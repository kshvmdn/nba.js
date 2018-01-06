import should from "should";
import * as constants from "./";

describe("api/stats/constants/index", () => {
  it("should export something", done => {
    constants.should.not.be.empty();
    done();
  });

  it("should export URL object", done => {
    constants.should.have.property("URL");
    done();
  });

  it("should export DEFAULTS", done => {
    constants.should.have.property("DEFAULTS");
    done();
  });
});
