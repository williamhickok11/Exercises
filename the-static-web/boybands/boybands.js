var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;



// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy_bands");
console.log("bandElement", bandElement);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");;
console.log("veggieElement", veggieElement);

// Start looping

for (var i = 0; i < loopCount; i += 1) {


	// Keep track of which band we're on in the loop
	// Add the band names into the correct <div>
	
	var currentBand = bands[i];
	console.log(currentBand);
	bandElement.innerHTML += currentBand + ", ";


	// Keep track of which veggie we're on in the loop
	// Add the veggie names into the correct <div>
	
	var currentVeggie = vegetables[i];
	console.log(currentVeggie);
	veggieElement.innerHTML += currentVeggie + ", ";


}
