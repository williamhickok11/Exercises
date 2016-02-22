// Now that the test suite exists, write a simple application to implement the functionality.

// In an HTML file, have two elements: a textarea and a button.
// When the button is clicked, extract the contents of the textarea and validate it against the following rules.
// There should only be alphanumeric characters in the text. No special characters like $%^&*.
// No duplicate words allowed.
// Word count should be less than 100.

$("#aButton").on("click", function(){
  var currentString = $("#userStringInput").val();
  console.log("currentString", currentString);
})