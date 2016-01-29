// Instructions


// The text input should only accept letters. No numbers.


// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.


// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.

// The output of each of the functions should immediately appear as well.


var go = function () {
  var userText = document.getElementById("text").value;
  
  function reversal() {
    var reverseText = userText.split("").reverse().join("");
    console.log("reverseText", reverseText);
    return reverseText;
  }

  function alphabits() {
    var alphabitsText = userText.split("").sort().join("");
    console.log("alphabitsText", alphabitsText);
    return alphabitsText;
  }

  function palindrome() {
    if (userText === userText.split("").reverse().join("")) {
      console.log("userText Pala", userText);
    } else {
      console.log("no Pala");
    }
  }

  var testString = document.getElementById("text").value;
  console.log("testString", testString);
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
  // Status API Training Shop Blog About Pricing
};




document.getElementById("go").addEventListener("click", go);





