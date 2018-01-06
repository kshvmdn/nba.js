import should from "should";
import formEndpoint from "./form-endpoint";

describe("api/data/utils/form-endpoint", () => {
  it("should export a function", done => {
    formEndpoint.should.be.a.Function;
    done();
  });

  it("should replace {{variables}} with the provided value", done => {
    formEndpoint("{{year}}", { year: "2016" }).should.eql("2016");
    done();
  });

  it("shouldn't do anything with {{variables}} that have no value", done => {
    formEndpoint("{{year}}", {}).should.eql("{{year}}");
    formEndpoint("{{name}}{{year}}", { name: "nba" }).should.eql("nba{{year}}");
    done();
  });

  it("should return the string when no params are provided", done => {
    formEndpoint("nba").should.eql("nba");
    formEndpoint("{{name}}").should.eql("{{name}}");
    done();
  });
});
