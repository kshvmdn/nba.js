import should from "should";
import * as constants from "./defaults";

describe("api/stats/constants/defaults", () => {
  it("should not export DEFAULTS", done => {
    constants.should.not.have.property("DEFAULTS");
    should.not.exist(constants.DEFAULTS);
    done();
  });

  it("should export objects with `method`, `endpoint` & `defaults` keys", done => {
    Object.keys(constants)
      .every(k => {
        let v = constants[k];
        return (
          v.hasOwnProperty("endpoint") &&
          v.hasOwnProperty("defaults") &&
          v.hasOwnProperty("method")
        );
      })
      .should.be.true();

    done();
  });

  it("should export objects with `endpoint` values that begin with a forward slash", done => {
    Object.keys(constants)
      .every(k => {
        let v = constants[k];
        return v.hasOwnProperty("endpoint") && /^\/[^/]/g.test(v.endpoint);
      })
      .should.be.true();

    done();
  });
});
