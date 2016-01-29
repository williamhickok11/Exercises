
//-- DECLARE FUNCTIONS --//

function toCelsius (fahrenheit) {
	var celsius = (fahrenheit - 32) / 1.8;
	return celsius;
}
function toFahrenheit (celsius) {
	var fahrenheit = (celsius * 1.8) + 32;
	return fahrenheit
}

 
//-- Get a reference to the button element in the DOM --//
var button = document.getElementById("converter");


//-- This function should determine which conversion should --//
//-- happen based on which radio button is selected. --//

function determineConverter (clickEvent) {
	
	//-- DEFINE VARS--//
	var checkCelsius = document.getElementById("radioSelector").checked;
	var tempInput = document.getElementById("tempInput").value;
  var checkFahrenheit = document.getElementById("radioSelectorII").checked;
  var answerElement = document.getElementById("answer");
	var conversionI = toCelsius(tempInput);
	var conversionII = toFahrenheit(tempInput);

	//-- RETRIEVE INPUT DATA --//
	
  console.log("input: ", tempInput);

	//-- CELSIUS IS CHECKED --//

	if (checkCelsius) {
		//-- CHECK THE CLICK AND THE INPUT --//
  	console.log("celsiusClicked", clickEvent);
  	console.log(conversionI);

  	//-- ADD THE ANSWER --//
		answerElement.innerHTML = conversionI + " C";

		//-- CHANGE THE COLOR --//
		if (conversionI > 32) {
			console.log("greater than 32");
			answerElement.style.color = "red";

		} else if (conversionI < 0) {
			console.log("less than 0");
			answerElement.style.color = "blue";

		} else {
			console.log("mild");
			answerElement.style.color = "green";

		}


  //-- FAHRENHEIT IS CHECKED --//

  } else if (checkFahrenheit) {
  	//-- CHECK THE CLICK AND THE INPUT --//
  	console.log("fahrenheitClicked", clickEvent);
  	console.log(conversionII);

  	//-- ADD THE ANSWER --//
		answerElement.innerHTML = conversionII + " F";
  	
  	//-- CHANGE THE COLOR --//
		if (conversionII > 90) {
			console.log("greater than 32");
			answerElement.style.color = "red";

		} else if (conversionII < 32) {
			console.log("less than 0");
			answerElement.style.color = "blue";

		} else {
			console.log("mild");
			answerElement.style.color = "green";

		}
 
  }
  
}
//-- EVENT LISTENER --//
button.addEventListener("click", determineConverter);
// Assign a function to be executed when the button is clicked //


//-- CLEAR BUTTON --//
document.getElementById("clear").onclick = function () {
	document.getElementById("answer").innerHTML = "";
	document.getElementById("tempInput").value = "";
	document.getElementById("radioSelector").checked = false;
	document.getElementById("radioSelectorII").checked = false;
}









