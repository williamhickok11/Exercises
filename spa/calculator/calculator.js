var cal1 = function(first, second) {
  console.log("cal1");
  /*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
  */
  var answer = first * second;
  console.log("multiplyAnswer:", answer);
  document.getElementById("output").innerHTML = answer;
  return answer;
}

var cal2 = function(first, second) {
  console.log("cal2");
  /*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
  */
  var answer = parseInt(first) + parseInt(second);
  console.log("addAnswer:", answer);
  document.getElementById("output").innerHTML = answer;
  return answer;
}

var cal3 = function(first, second) {
  console.log("cal3");
  /*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
  */
  var answer = first - second;
  console.log("addAnswer:", answer);
  document.getElementById("output").innerHTML = answer;
  return answer;
}

var cal4 = function(first, second) {
  console.log("cal4");
  /*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
  */
  var answer = first / second;
  console.log("addAnswer:", answer);
  document.getElementById("output").innerHTML = answer;
  return answer;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
*/
var caculate = function(first, second, func) {
  func(first, second);
}



var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;

var calculateFun1 = function() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  caculate(number1, number2, cal1)
}

var calculateFun2 = function() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  caculate(number1, number2, cal2)
}

var calculateFun3 = function() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  caculate(number1, number2, cal3)
}

var calculateFun4 = function() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  caculate(number1, number2, cal4)
}

document.getElementById("button1").addEventListener("click", calculateFun1);
document.getElementById("button2").addEventListener("click", calculateFun2);
document.getElementById("button3").addEventListener("click", calculateFun3);
document.getElementById("button4").addEventListener("click", calculateFun4);




