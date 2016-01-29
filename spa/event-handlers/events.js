var outPut = document.getElementById("output-target");
var artEl = document.getElementsByClassName("article-section");
var headerEle = document.getElementById("page-title");
var keyPress = document.getElementById("keypress-input");

var handleSectionClick = function(mouseEvent) {
  outPut.innerHTML = "You clicked on the " + mouseEvent.target.innerHTML + " section";
};

for (var i = 0; i < artEl.length; i++) {
  artEl.item(i).addEventListener("click", handleSectionClick);
};



// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var headerHover = function(mouseHover) {
  outPut.innerHTML = "<p>You moved your mouse over the header</p>"
};
var headerOut = function(mouseOut) {
  outPut.innerHTML = "<p>You left me!!</p>"
};

headerEle.addEventListener("mouseover", headerHover);
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
headerEle.addEventListener("mouseout", headerOut);


// When you type characters into the input field, the output element should mirror the text in the input field.
var mirrorTxt = function() {
  outPut.innerHTML = keyPress.value;
};

keyPress.addEventListener("keyup", mirrorTxt);


// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var colorButton = document.getElementById("add-color");

var addColor = function() {
  document.getElementById("guinea-pig").classList.toggle("blue");
};

colorButton.addEventListener("click", addColor)


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var largeButton = document.getElementById("make-large");

var addLarge = function() {
  document.getElementById("guinea-pig").classList.toggle("large");
};

largeButton.addEventListener("click", addLarge)


// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
var captureButton = document.getElementById("add-border");

var addBoarder = function() {
  document.getElementById("guinea-pig").classList.toggle("boarder");
};

captureButton.addEventListener("click", addBoarder)



// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var roundButton = document.getElementById("add-rounding");

var roundedBoarder = function() {
  document.getElementById("guinea-pig").classList.toggle("rounded");
};

roundButton.addEventListener("click", roundedBoarder)


// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.