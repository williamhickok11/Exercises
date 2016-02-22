// Write a test suite to validate your JavaScript functions.

// There should be a function defined with the name checkWordCount.
// That function should return false if a string sent to it has more than 100 words in it.

// There should be a function defined with the name duplicateCheck.
// That function should return false if a string has duplicate words in it.

// There should be a function defined with the name verifyAlphaNumeric.
// That function should return false if there are any non-alphanumeric characters in a string.



describe('Testing for word finder', function() {

  it('return false if a string sent to it has more than 100 words in it.', function() {
    expect(checkWordCount(veryLongString)).toBeFalsy();
  });

  it('return false if a string has duplicate words in it.', function() {
    expect(duplicateCheck(veryLongString)).toBeFalsy();
  });

  it('return false if there are any non-alphanumeric characters in a string.', function() {
    expect(verifyAlphaNumeric(veryLongString)).toBeFalsy();
  });

});