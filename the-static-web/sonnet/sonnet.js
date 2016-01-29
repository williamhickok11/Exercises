// Paste the code below into your HTML file.



// Take the contents of the sonnet div and place it in a variable
var div = document.getElementById("sonnet").innerHTML;
console.log(div);
// console.log(sonnetText.innerHTML);
sonnetText = div.innerHTML;

// Find and output the starting position of the word "orphans"
var whereIsOrphans = sonnetText.indexOf("orphans");
console.log("whereIsOrphans:", whereIsOrphans);


// Output the number of characters in the sonnet
var lenghtOfSonnet = sonnetText.length;
console.log("lenghtOfSonnet:", lenghtOfSonnet);

// Replace the first occurance of the string "winter" with "yuletide"
var newSonnetText = sonnetText.replace("winter", "yuletide");
console.log("newSonnetText:", newSonnetText);

// Replace all occurances of the string "the" with "a large"
newSonnetText = newSonnetText.replace(/the/g, "a large");
console.log("newestSonnetText:", newSonnetText);

// Set the content of the sonnet div with the new string
div.innerHTML = newSonnetText;
console.log("What:", newSonnetText);






 