import should from "should";
import * as constants from "./";

describe("api/data/constants/index", () => {
  it("should export something", done => {
    constants.should.not.be.empty();
    done();
  });

  it("should export URL object", done => {
    constants.should.have.property("URL");
    done();
  });

  it("should export ENDPOINTS", done => {
    constants.should.have.property("ENDPOINTS");
    done();
  });
});
