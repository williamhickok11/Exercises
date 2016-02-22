"use strict";

var add = function (first, second) {
  var answer = Number(first) + Number(second);
  $("#outPut").html(answer);
}

var subtract = function (first, second) {
  var answer = first - second;
  $("#outPut").html(answer);
}

var multiply = function (first, second) {
  var answer = first * second;
  $("#outPut").html(answer);
}

var divide = function (first, second) {
  var answer = first / second;
  $("#outPut").html(answer);
}

var square = function(first) {
  var answer = Math.pow(first, 2);
  $("#outPut").html(answer);
}

var squareRoot = function(first) {
  var answer = Math.sqrt(first);
  $("#outPut").html(answer);
}

var firstNumber;
var secondNumber;
var chosenOperation;

$("#button1").on("click", function() {
  firstNumber = $("#userInput").val()
  console.log("firstNumber", firstNumber);
  chosenOperation = "+";
  console.log("chosenOperation", chosenOperation);
  $("#userInput").val("");
  $("#userInput").focus();
});

$("#button2").on("click", function() {
  firstNumber = $("#userInput").val()
  console.log("firstNumber", firstNumber);
  chosenOperation = "-";
  console.log("chosenOperation", chosenOperation);
  $("#userInput").val("");
  $("#userInput").focus();
});

$("#button3").on("click", function() {
  firstNumber = $("#userInput").val()
  console.log("firstNumber", firstNumber);
  chosenOperation = "/";
  console.log("chosenOperation", chosenOperation);
  $("#userInput").val("");
  $("#userInput").focus();
});

$("#button4").on("click", function() {
  firstNumber = $("#userInput").val()
  console.log("firstNumber", firstNumber);
  chosenOperation = "X";
  console.log("chosenOperation", chosenOperation);
  $("#userInput").val("");
  $("#userInput").focus();
});

$("#button5").on("click", function() {
  firstNumber = $("#userInput").val()
  console.log("firstNumber", firstNumber);
  square(firstNumber);
  $("#userInput").val("");
  $("#userInput").focus();
  console.log("sqar");
});

$("#button6").on("click", function() {
  firstNumber = $("#userInput").val()
  console.log("firstNumber", firstNumber);
  chosenOperation = "sqaRoot";
  console.log("chosenOperation", chosenOperation);
  squareRoot(firstNumber);
  $("#userInput").val("");
  $("#userInput").focus();
  console.log("sqaRoot");
});

$("#userInput").on("keyup", function(event) {
  if (event.keyCode === 13) {
    secondNumber = $("#userInput").val()
    switch (chosenOperation) {
      case "+":
        add(firstNumber, secondNumber);
        $("#userInput").val("");
        console.log("+");
        break;
      case "-":
        subtract(firstNumber, secondNumber);
        $("#userInput").val("");
        console.log("-");
        break;
      case "/":
        divide(firstNumber, secondNumber);
        $("#userInput").val("");
        console.log("/");
        break;
      case "*":
        multiply(firstNumber, secondNumber);
        $("#userInput").val("");
        console.log("*");
        break;
    }
  }
});




