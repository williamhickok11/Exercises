"use strict";

// There should be a function defined with the name checkWordCount.
// That function should return false if a string sent to it has more than 100 words in it.

// There should be a function defined with the name duplicateCheck.
// That function should return false if a string has duplicate words in it.

// There should be a function defined with the name verifyAlphaNumeric.
// That function should return false if there are any non-alphanumeric characters in a string.

var checkWordCount = function (userString) {
  var userStringArray = userString.split(" ");
  if (userStringArray.length > 100) {
    console.log("false");
    return false;
  } else {
    console.log("less than 100");
  };
};

var duplicateCheck = function (userString) {
  var userStringArray = userString.split(" ");
  for (var i = 0; i < userStringArray.length; i++) {
    for (var j = 0; j < userStringArray.length; j++) {
      if (userStringArray[i] === userStringArray[j]) {
        if (i !== j) {
          console.log("False: There is a repeated word");
          return false;
        };
      };
    };
  };
};

var verifyAlphaNumeric = function (userString) {
  var userStringArray = userString.split(" ");
  for (var i = 0; i < userStringArray.length; i++) {
    userStringArray[i]
    if(/^[a-zA-Z0-9- ]*$/.test(userStringArray[i]) == false) {
      console.log('Your string contains illegal characters.');
      return false;
    };
  };
};


$("#aButton").on("click", function(){
  var currentString = $("#userStringInput").val();

  // Word count should be less than 100.
  checkWordCount(currentString);
  // No duplicate words allowed.
  duplicateCheck(currentString);
  // There should only be alphanumeric characters in the text. No special characters like $%^&*.
  verifyAlphaNumeric(currentString);
});