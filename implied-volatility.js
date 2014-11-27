/**
 * Determine implied volatility of options based on their prices.
 * @module implied-volatility
 * @author Matt Loppatto
 * @copyright 2014 Matt Loppatto
 */

var bs = require("black-scholes");

/**
 * Calculate a close estimate of implied volatility given an option price.  A
 * binary search type approach is used to determine the implied volatility.
 *
 * @param {Number} expectedCost The market price of the option
 * @param {Number} s Current price of the underlying
 * @param {Number} k Strike price
 * @param {Number} t Time to experiation in years
 * @param {Number} r Anual risk-free interest rate as a decimal
 * @param {String} callPut The type of option priced - "call" or "put"
 * @param {Number} [estimate=.1] An initial estimate of implied volatility
 * @returns {Number} The implied volatility estimate
 */
function getImpliedVolatility(expectedCost, s, k, t, r, callPut, estimate)
{
  estimate = estimate || .1;
  var low = 0;
  var high = Infinity;
  // perform 100 iterations max
  for(var i = 0; i < 100; i++)
  {
    var actualCost = bs.blackScholes(s, k, t, estimate, r, callPut);
    // compare the price down to the cent
    if(expectedCost * 100 == Math.floor(actualCost * 100))
    {
      break;
    }
    else if(actualCost > expectedCost)
    {
      high = estimate;
      estimate = (estimate - low) / 2 + low
    }
    else
    {
      low = estimate;
      estimate = (high - estimate) / 2 + estimate;
      if(!isFinite(estimate)) estimate = low * 2;
    }
  }
  return estimate;
}

module.exports = {
  getImpliedVolatility: getImpliedVolatility
}
