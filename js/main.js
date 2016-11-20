var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i=0;i<squares.length;i++){
    if (colors[i]){
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }

});
hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i=0;i<squares.length;i++){
    squares[i].style.background = colors[i];
    if (squares[i].style.display === "none")
    {
      squares[i].style.display = "block";
    }
  }
});


resetButton.addEventListener("click", function(){
  // nya färger
  colors = generateRandomColors(numberOfSquares);
  // uppdatera färger
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
  //
  for (var i=0;i<squares.length;i++){
    // add initial colors
    squares[i].style.background = colors[i];
  }
  resetButton.textContent = " New Colors ";

});


for (var i=0;i<squares.length;i++){
  // add initial colors
  squares[i].style.background = colors[i];
  // add event handlers for clicking
  squares[i].addEventListener("click", function (){
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = pickedColor;
      resetButton.textContent = "Play Again?";
    }
    else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColors(theColor){
  for (var i=0;i<squares.length;i++){
    squares[i].style.background = theColor;
  }

}
function pickColor(){
  return colors[getRandom(0,colors.length-1)];
}

 function genColor(){
   return "rgb(" + String(getRandom(0,255)) + ", " + String(getRandom(0,255)) + ", " + String(getRandom(0,255)) + ")";
 }

function generateRandomColors(num){
  var arr = [];
  for (var i=0;i<num;i++){
    arr.push(genColor());
  }
  return arr;
}
