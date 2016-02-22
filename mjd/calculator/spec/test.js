// Write unit tests to check for the existence of the following functions:
// add()
// subtract()
// multiply()
// divide()
// square()
// squareRoot()
// Write unit tests that will verify the expected output of each of those functions.


describe('Testing for all calculator functions', function() {

  it('add two ints', function() {
    expect(add(2, 5)).toBe(7);
  });

  it('subtract two ints', function() {
    expect(subtract(7, 7)).toBe(0);
  });

  it('multiply two ints', function() {
    expect(divide(10, 5)).toBe(2);
  });

  it('divide two ints', function() {
    expect(multiply(2, 4)).toBe(8);
  });

  it('square of a number', function() {
    expect(square(3)).toBe(9);
  });

  it('squareRoot of a number', function() {
    expect(squareRoot(9)).toBe(3);
  });

});








