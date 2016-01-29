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



function coinCounter (event) {

  var coinInput = document.getElementById("coinInput").value;

  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  console.log("Input:", coinInput);

  coinPurse.quarters = Math.floor(coinInput/25);
  console.log("quarters:", coinPurse.quarters);
  var quarterRemainder = coinInput%25;
  console.log("quarterRemainder:", quarterRemainder);

  coinPurse.dimes = Math.floor(quarterRemainder/10);
  console.log("dimes:", coinPurse.dimes);
  var dimeRemainder = quarterRemainder%10;
  console.log("quarterRemainder:", quarterRemainder);

  coinPurse.nickels = Math.floor(dimeRemainder/5);
  var nickelRemainder = dimeRemainder%5;

  coinPurse.pennies = Math.floor(nickelRemainder);

  console.log("final count", coinPurse);

  return coinPurse;
}

console.log( 3.65525.toFixed(2) ); 


// //-- CONVERT --//

// BUTTON LISTENER //
var button = document.getElementById("converter");
button.addEventListener("click", coinCounter);


//-- CLEAR BUTTON --//
document.getElementById("clear").onclick = function () {
  // document.getElementById("answer").innerHTML = "";
  document.getElementById("coinInput").value = "";
}