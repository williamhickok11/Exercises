// This SandwichMaker IIFE augments the original one
var totalPrice = 0;

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
    noMeat: 0.00
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


  // var priceDisplay = function(selectedItem) {
  //   if (document.getElementById(selectedItem).checked) {  
  //     totalPrice += priceAdder;
  //   } else {
  //     totalPrice -= priceAdder;
  //   };
  //   totalPrice = parseFloat(totalPrice.toFixed(2));
  //   document.getElementById("finalSand").innerHTML = totalPrice;
  //   console.log("added price:", totalPrice);
  // };


  maker.addBread = function(selectedBread) {
    var priceAdder = breadPrice[selectedBread];
    console.log("bread price:", priceAdder);
    if (document.getElementById(selectedBread).checked) {  
      totalPrice += priceAdder;
    } else {
      totalPrice -= priceAdder;
    };
    totalPrice = parseFloat(totalPrice.toFixed(2));
    document.getElementById("finalSand").innerHTML = "$" + totalPrice;
    console.log("added price:", totalPrice);
  }

  maker.addMeat = function(selectedMeat) {
    var priceAdder = meatPrice[selectedMeat];
    console.log("added price:", priceAdder);
    if (document.getElementById(selectedMeat).checked) {
      totalPrice += priceAdder;
    } else {
      totalPrice -= priceAdder;
    };
    totalPrice = parseFloat(totalPrice.toFixed(2));
    document.getElementById("finalSand").innerHTML = "$" + totalPrice;
    console.log("added price:", totalPrice);
  }

  maker.addCheese = function(selectedCheese) {
    var priceAdder = cheesePrice[selectedCheese];
    console.log("added price:", priceAdder);
    if (document.getElementById(selectedCheese).checked) {
      totalPrice += priceAdder;
    } else {
      totalPrice -= priceAdder;
    };
    totalPrice = parseFloat(totalPrice.toFixed(2));
    document.getElementById("finalSand").innerHTML = "$" + totalPrice;
    console.log("added price:", totalPrice);
  }

  maker.addCondiment = function(selectedCondiment) {
    var priceAdder = condimentPrice[selectedCondiment];
    console.log("added price:", priceAdder);
    if (document.getElementById(selectedCondiment).checked) {
      totalPrice += priceAdder;
    } else {
      totalPrice -= priceAdder;
    };
    totalPrice = parseFloat(totalPrice.toFixed(2));
    document.getElementById("finalSand").innerHTML = "$" + totalPrice;
    console.log("added price:", totalPrice);
  }

   maker.addVeggie = function(selectedVeggie) {
    var priceAdder = veggiePrice[selectedVeggie];
    console.log("added price:", priceAdder)
    if (document.getElementById(selectedVeggie).checked) {
      totalPrice += priceAdder;
    } else {
      totalPrice -= priceAdder;
    };
    totalPrice = parseFloat(totalPrice.toFixed(2));
    document.getElementById("finalSand").innerHTML = "$" + totalPrice;
    console.log("added price:", totalPrice);
  }



  return maker;
})(SandwichMaker);


 