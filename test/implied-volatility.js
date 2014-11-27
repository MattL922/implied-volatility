var iv     = require("../implied-volatility"),
    assert = require("assert");

describe("Implied Volatility", function()
{
  it("should return ~.11", function()
  {
    var impliedVol = iv.getImpliedVolatility(2, 101, 100, .1, .0015, "call");
    assert.equal(impliedVol, 0.11406250000000001);
  });
  it("should return ~.19", function()
  {
    var impliedVol = iv.getImpliedVolatility(2, 101, 100, .1, .0015, "put");
    assert.equal(impliedVol, 0.1953125);
  });
});
