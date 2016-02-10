var clicked;

var myArrayOfObjects = [
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Chicken",
  name: "William Hickok",
  bio: "Under omoe was Servin Minamotoheld by en battle dwaven the strongest Yoshinaka, Tgone of his finest soldiers, and her skills irfed many of those men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1947,
    death: 1995
  }
},
{
  title: "General",
  name: "Thomas Billiard",
  bio: "This is a sentence describing a guy. This is a sentence describing a guy. This is a sentence describing a guy. This is a sentence describing a guy.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 2004,
    death: 2094
  }
},
{
  title: "Indian Chief",
  name: "Paloma",
  bio: "This is the description an Indian chief. This is the description an Indian chief. This is the description an Indian chief. This is the description an Indian chief.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 2000,
    death: 2057
  }
}
];

var keyPress = document.getElementById("userText");
var containerString = "";

for (var i = 0; i < myArrayOfObjects.length; i++) {
  containerString += "<div id='person" + i + "' class='background" + i%2 + "'>";
    containerString += "<header>" + myArrayOfObjects[i].title + " " + myArrayOfObjects[i].name + "</header>";
    containerString += "<section>" + myArrayOfObjects[i].bio + "</section>";
    containerString += "<img src='" + myArrayOfObjects[i].image + "' alt=''>";
    containerString += "<footer>" + myArrayOfObjects[i].lifespan.birth + "-" + myArrayOfObjects[i].lifespan.death + "</footer>";
  containerString += "</div>";
  
};
document.getElementById("container").innerHTML = containerString;


var createBorder = function(event) {
  event.target.classList.toggle("border")
  document.getElementById("userText").focus();
}

var fireBoth = function(event) {
  createBorder(event);
  clicked = event.target;
};


document.addEventListener("click", fireBoth);




var mirrorTxt = function(event) {
  clicked.innerHTML = keyPress.value;
  console.log("go");
}

keyPress.addEventListener("keyup", mirrorTxt);










