var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");

/* 
 Use the forEach method to add the name of each planets
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function (curentIndex){
  el.innerHTML += `<div> ${curentIndex} </div>`;
});


// Use the map method to create a new array where the first letter of each planets is capitalized
var planetsCap = planets.map(function (curentIndex){
  return curentIndex.charAt(0).toUpperCase() + curentIndex.slice(1);
});
console.log("planetsCap:", planetsCap);


// Use the filter method to create a new array that contains planetss with the letter 'e'
var planetsWithE = planets.filter(function (curentIndex){
  if (curentIndex.indexOf("e") >= 0) {
    return curentIndex;
  };
});
console.log("planetsWithE:", planetsWithE);


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var planetsSentence = planets.reduce(function (gfa, fss){
  return gfa + " " + fss;
});
console.log("planetsSentence:", planetsSentence);

var fruit = ["cherries", "apples", "bananas", "zb"];
console.log(fruit.sort()); // ["apples", "bananas", "cherries"]



// var bobo = "This is a sentence"

// console.log("bobo" bobo);



















