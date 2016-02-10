// Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

// For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

// The two JSON representations above should be in two files: products.json, and categories.json. You should load both file via XHRs and store the contents in two different JavaScript variables in your code.

var SeasonalSales = (function () {

  var productArray;
  var categorieArray;

  return {
    loadProduct: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array

        var productData = JSON.parse(this.responseText);
        productArray = productData.productList;
        console.log("productArray", productArray);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

        callbackToInvoke(productArray);

      });
      loader.open("GET", "products.json");
      loader.send();
    },


    loadCategorie: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function() {
        var categorieData = JSON.parse(this.responseText);
        categorieArray = categorieData.categorieList;
        console.log("categorieArray", categorieArray);
      });
      loader.open("GET", "categories.json");
      loader.send();
    }
  }




})();



var buildDOM = function (argument) {
  document.getElementbyId("products").innerHTML = "argument";
};
document.getElementbyId("products").innerHTML = "argsagsa";

SeasonalSales.loadProduct(buildDOM);
SeasonalSales.loadCategorie(trial);



