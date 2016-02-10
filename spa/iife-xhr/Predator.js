var Predator = (function () {
  var carnivoreArray = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        var carnivoreData = JSON.parse(this.responseText);
        carnivoreArray = carnivoreData.carnivoreList;

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

        callbackToInvoke(carnivoreArray);
      });

      loader.open("GET", "Carnivores.json");
      loader.send();
    }
  }
})();













































// var Predator = (function () {
//   var carnivores = [];
//   var herbivores = [];
  
//   return {
//     loadCarnivore: function (callbackToInvoke) {
//       var loader = new XMLHttpRequest();

//       loader.addEventListener("load", function () {
//         // Set the value of the private array
//         var carnivoreData = JSON.parse(this.responseText);

//         // Invoke the callback function so that the caller knows
//         // that the process is complete. Make sure to pass the 
//         // carnivore array as an argument.
//         callbackToInvoke(carnivoreData.carnivoreList);
//       });
//       loader.open("GET", "Carnivores.json")
//       loader.send();
      
//     },
//     loadHerbivore: function (callbackToInvoke) {
//       var loader = new XMLHttpRequest();

//       loader.addEventListener("load", function () {

//         var herbivoreData = JSON.parse(this.responseText);
//         callbackToInvoke(herbivoreData.herbivoreList); 
//       });
//       loader.open("GET", "Herbivores.json")
//       loader.send();
      
//     }

//   }
// })();

