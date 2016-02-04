var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "Carnivores.json")
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivoreList;

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

        callbackToInvoke(carnivores);

      });
    },

    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "Herbivores.json")
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText).herbivoresList;

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

        callbackToInvoke(herbivores);

      });
    },
  }
})();


// var categoriesRequest = new XMLHttpRequest();
// categoriesRequest.addEventListener("load", loadCategories);
// categoriesRequest.open("GET", "categories.json")
// categoriesRequest.send();