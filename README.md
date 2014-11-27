implied-volatility
==================

Determine implied volatility of options based on their prices

**getImpliedVolatility(expectedCost, s, k, t, r, callPut, estimate)**
- **expectedCost** - The market price of the option
- **s** - Current price of the underlying
- **k** - Strike price
- **t** - Time to experiation in years
- **r** - Anual risk-free interest rate as a decimal
- **callPut** - The type of option priced - "call" or "put"
- **[estimate=.1]** - An initial estimate of implied volatility

**Usage:**
```
var iv = require("implied-volatility");

iv.getImpliedVolatility(2, 101, 100, .1, .0015, "call"); // 0.11406250000000001 (11.4%)

// To confirm this volatility:

var bs = require("black-scholes");

bs.blackScholes(101, 100, .1, .1140625, .0015, "call"); // 2.009799330328903
```
