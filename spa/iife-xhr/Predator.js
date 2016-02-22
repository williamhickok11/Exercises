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

