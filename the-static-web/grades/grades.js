// Loop over an array of student grades (values from 50-100)
// and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var i = 0; i < scores.length; i++) {
	
// How many of each grade?
  if (scores[i] <= 60) {
    console.log(scores[i] + " = F");
  } else if (scores[i] > 60 && scores[i] < 71) {
    console.log(scores[i] + " = D");
  } else if (scores[i] > 70 && scores[i] < 81) {
    console.log(scores[i] + " = C");
  } else if (scores[i] > 80 && scores[i] < 91) {
    console.log(scores[i] + " = B");
  } else if (scores[i] > 90) {
    console.log(scores[i] + " = A");
  }
};

// What is the lowest grade?
var lowestGrade = Math.min.apply(Math, scores)
console.log("lowest Grade: ", lowestGrade);


// What is the highest grade?
var lowestGrade = Math.max.apply(Math, scores)
console.log("highest Grade: ", lowestGrade);