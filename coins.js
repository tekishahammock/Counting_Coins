/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter ( dollarAmount ) {
  // Initialize a JavaScript object to hold the coins

  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  coinPurse.quarters = Math.floor( dollarAmount / .25 ) ;
  dollarAmount = ( dollarAmount % .25 ).toFixed(2)

  if ( dollarAmount !== 0 ) {
    coinPurse.dimes = Math.floor( dollarAmount / .10 );
    dollarAmount = ( dollarAmount % .10 ).toFixed(2);
  }

  if ( dollarAmount !== 0 ) {
    coinPurse.nickels = Math.floor( dollarAmount / .05 );
    dollarAmount = ( dollarAmount % .05 ).toFixed(2);
  }

  if ( dollarAmount !== 0 ) {
    coinPurse.pennies = Math.floor( dollarAmount / .01 );
  }

  return coinPurse;
}

var dollarAmount = prompt("Please tell me how much money you have and I will convert it into coins!");
var coins = coinCounter( dollarAmount );
console.log( coins );