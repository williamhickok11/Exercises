          // Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

          // Variable to hold topping that the user selects
var selectedTopping;

          // Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("breadChooser");
var meatChooser = document.getElementById("meatChooser");
var cheeseChooser = document.getElementById("cheeseChooser");
var condimentChooser = document.getElementById("condimentChooser");
var veggieChooser = document.getElementById("veggieChooser");

           
          // A <select> element broadcasts a change event, so you listen for it
          // and get the value of the topping from your augmented IIFE
          
breadChooser.addEventListener("change", function(event) {
            // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selectedTopping", selectedTopping);
  SandwichMaker.addBread(selectedTopping);

});

meatChooser.addEventListener("change", function(event) {
            // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selectedTopping", selectedTopping);
  SandwichMaker.addMeat(selectedTopping);            
});

cheeseChooser.addEventListener("change", function(event) {
            // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selectedTopping", selectedTopping);
  SandwichMaker.addCheese(selectedTopping);            
});

condimentChooser.addEventListener("change", function(event) {
            // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selectedTopping", selectedTopping);
  SandwichMaker.addCondiment(selectedTopping);            
});

veggieChooser.addEventListener("change", function(event) {
            // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selectedTopping", selectedTopping);
  SandwichMaker.addVeggie(selectedTopping);            
});





// var getFinalPrice = function (){
//   console.log("is this the meat total:", SandwichMaker.addMeat());
//   console.log("is this the cheese total:", SandwichMaker.addCheese());
//   console.log("is this the condiments total:", SandwichMaker.addCondiments());
//   console.log("is this the bread total:", SandwichMaker.addBread());
//   console.log("is this the veggie total:", SandwichMaker.addVeggies());

//   var fianlTotal = SandwichMaker.addMeat() + SandwichMaker.addCheese() + SandwichMaker.addCondiments() + SandwichMaker.addBread() + SandwichMaker.addVeggies();
//   console.log("fianlTotal", fianlTotal);
//   document.getElementById("finalSand").innerHTML = fianlTotal;

// }

// document.getElementById("getSandwitch").addEventListener("click", getFinalPrice)