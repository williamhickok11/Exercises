// Your job is to build a web page that lists all of the 

// Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

// For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

// The two JSON representations above should be in two files: products.json, and categories.json. You should load both file via XHRs and store the contents in two different JavaScript variables in your code.

var productsData;
var loadProducts = function() {
  console.log("loadProducts");
  productsData = JSON.parse(this.responseText);
  console.log("productsData", productsData);

  var contentEl = document.getElementById("products");

  var productsJSONInfo = "";
  var currentProduct;

  for (var i = 0; i < productsData.products.length; i++) {
    currentProduct = productsData.products[i];
    productsJSONInfo += "<div class='something'>";
    productsJSONInfo += `<h3>${currentProduct.name}</h3>`;
    productsJSONInfo += `<div class='price'>${currentProduct.price}</div>`;
    productsJSONInfo += "</div>";
  };

  contentEl.innerHTML = productsJSONInfo;
}

var trialRun = function() {
  
  var loadCategories = function() {
    var categoriesData = JSON.parse(this.responseText);
    console.log("productsData", categoriesData);

    var dropDownSelect = document.getElementById("selectDropDown").value;
    var priceClassName = document.getElementsByClassName("price");
    for (var i = 0; i < priceClassName.length; i++) {
      
      var productPrice = productsData.products[i].price

      if (dropDownSelect === "1") {  
        console.log("1");
        var finalCost = productPrice - (productPrice * categoriesData.categories[0].discount)

        priceClassName[i].innerHTML = parseFloat(finalCost.toFixed(2));

      } else if (dropDownSelect === "2") {
        console.log("2");
        var finalCost = productPrice - (productPrice * categoriesData.categories[1].discount)
        
        priceClassName[i].innerHTML = parseFloat(finalCost.toFixed(2));

      } else if (dropDownSelect === "3") {
        console.log("3");
        var finalCost = productPrice - (productPrice * categoriesData.categories[2].discount)
        
        priceClassName[i].innerHTML = parseFloat(finalCost.toFixed(2));
      }

    };

    
  }

  var categoriesRequest = new XMLHttpRequest();
  categoriesRequest.addEventListener("load", loadCategories);
  categoriesRequest.open("GET", "categories.json")
  categoriesRequest.send();

}

document.getElementById("selectDropDown").addEventListener("change", trialRun);

var productsRequest = new XMLHttpRequest();

productsRequest.addEventListener("load", loadProducts);

productsRequest.open("GET", "products.json")
productsRequest.send();






// var hello = {
//   title: "Samurai",
//   name: "Tomoe Gozen",
//   bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
//   image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
//   lifespan: {
//     birth: 1747,
//     death: 1797
//     }
// }