var iv     = require("../implied-volatility"),
    assert = require("assert");

describe("Implied Volatility", function()
{
  it("should return ~.11", function()
  {
    var impliedVol = iv.getImpliedVolatility(2, 101, 100, .1, .0015, "call", 18);
    assert.equal(impliedVol, 0.11370849609375);
  });
  it("should return ~.19", function()
  {
    var impliedVol = iv.getImpliedVolatility(2, 101, 100, .1, .0015, "put", 8);
    assert.equal(impliedVol, 0.1953125);
  });
});
