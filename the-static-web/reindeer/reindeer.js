var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


// var hohohoElement = document.getElementById("coloredReindeer");


// Your task is to loop through all the reindeer in the array,

for (var i = 0; i < reindeer.length; i++) {
  // Add the name of the reindeer to the single HTML <div> element provided.
  console.log(colors[i] + " " + reindeer[i]);
  document.getElementById("reindeer").innerHTML += colors[i] + " " + reindeer[i] + "<br>";
};




// The name of the reindeer should be prepended with the corresponding
// color from the other array.

// For example:

// Blue Dasher
// Red Dancer
// etc...