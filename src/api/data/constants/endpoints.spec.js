import should from "should";
import * as constants from "./endpoints";

describe("api/data/constants/endpoints", () => {
  it("should export objects with `method` & `endpoint` keys", done => {
    Object.keys(constants)
      .every(k => {
        let v = constants[k];
        return v.hasOwnProperty("endpoint") && v.hasOwnProperty("method");
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
