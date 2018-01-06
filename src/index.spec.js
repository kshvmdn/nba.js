import should from "should";
import nba from "./";

describe("index", () => {
  it("should export `stats` and `data` submodules", done => {
    nba.should.have.property("stats");
    nba.should.have.property("data");
    done();
  });
});
