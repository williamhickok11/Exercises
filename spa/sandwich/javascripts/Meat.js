// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrice = {
    wheat: 2.10,
    white: 2.10,
    italian: 3.25
  }

  var meatPrice = {
    ham: 2.50,
    turkey: 2.00,
    bacon: 4.00,
    nomeat: 0.00
  }

  var cheesePrice = {
    provolone: 0.65,
    american: 0.55,
    swiss: 0.45,
    noCheese: 0.00
  }

  var condimentPrice = {
    ketchup: 0.44,
    mustard: 0.34,
    mayo: 0.12,
    noCondiments: 0.00
  }

  var veggiePrice = {
    lettuces: 0.24,
    olives: 1.00,
    greenPeppers: 1.20,
    noVeggies: 0.00
  }

  // Augment the original object with another method
  maker.addMeat = function() {
    var meatTotal;

    if (document.getElementById("ham").checked) {
      var hamTotal = meatPrice.ham;
      console.log(hamTotal);
    } else {
      var hamTotal = 0;
    };

    if (document.getElementById("turkey").checked){
      var turkeyTotal = meatPrice.turkey;
      console.log(turkeyTotal);
    } else {
      var turkeyTotal = 0;
    };

    if (document.getElementById("bacon").checked){
      var baconTotal = meatPrice.bacon;
      console.log(baconTotal);
    } else {
      var baconTotal = 0;
    };

    //*** GET MEAT TOTAL ***//
    meatTotal = hamTotal + turkeyTotal + baconTotal;
    console.log("meatTotal", meatTotal);
    return meatTotal;
  };

  maker.addCheese = function() {
    var cheeseTotal;

    if (document.getElementById("provolone").checked){
      var provoloneTotal = cheesePrice.provolone;
      console.log(provoloneTotal);
    } else {
      var provoloneTotal = 0;
    };

    if (document.getElementById("american").checked){
      var americanTotal = cheesePrice.american;
      console.log(americanTotal);
    } else {
      var americanTotal = 0;
    };

    if (document.getElementById("swiss").checked){
      var swissTotal = cheesePrice.swiss;
      console.log(swissTotal);
    } else {
      var swissTotal = 0;
    };

    cheeseTotal = provoloneTotal + americanTotal + swissTotal;
    console.log("cheeseTotal", cheeseTotal);
    return cheeseTotal;
  };


  maker.addCondiments = function() {
    var condimentTotal;

    if (document.getElementById("ketchup").checked){
      var ketchupTotal = condimentPrice.ketchup;
      console.log(ketchupTotal);
    } else {
      var ketchupTotal = 0;
    };

    if (document.getElementById("mustard").checked){
      var mustardTotal = condimentPrice.mustard;
      console.log(mustardTotal);
    } else {
      var mustardTotal = 0;
    };

    if (document.getElementById("mayo").checked){
      var mayoTotal = condimentPrice.mayo;
      console.log(mayoTotal);
    } else {
      var mayoTotal = 0;
    };

    condimentTotal = ketchupTotal + mustardTotal + mayoTotal;
    console.log("condimentTotal", condimentTotal);
    return condimentTotal;
  };

  maker.addBread = function() {
    var breadTotal;

    if (document.getElementById("wheat").checked){
      var wheatTotal = breadPrice.wheat;
      console.log(wheatTotal);
    } else {
      var wheatTotal = 0;
    };

    if (document.getElementById("white").checked){
      var whiteTotal = breadPrice.white;
      console.log(whiteTotal);
    } else {
      var whiteTotal = 0;
    };

    if (document.getElementById("italian").checked){
      var italianTotal = breadPrice.italian;
      console.log(italianTotal);
    } else {
      var italianTotal = 0;
    };

    breadTotal = wheatTotal + whiteTotal + italianTotal;
    console.log("breadTotal", breadTotal);
    return breadTotal;
  };

  maker.addVeggies = function() {
    var veggieTotal;

    if (document.getElementById("lettuces").checked){
      var lettucesTotal = veggiePrice.lettuces;
      console.log(lettucesTotal);
    } else {
      var lettucesTotal = 0;
    };

    if (document.getElementById("olives").checked){
      var olivesTotal = veggiePrice.olives;
      console.log(olivesTotal);
    } else {
      var olivesTotal = 0;
    };

    if (document.getElementById("greenPeppers").checked){
      var greenPeppersTotal = veggiePrice.greenPeppers;
      console.log(greenPeppersTotal);
    } else {
      var greenPeppersTotal = 0;
    };

    veggieTotal = lettucesTotal + olivesTotal + greenPeppersTotal;
    console.log("veggieTotal", veggieTotal);
    return veggieTotal;
  };

  


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
 