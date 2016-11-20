var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}


function setupModeButtons(){
  for (var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === " Easy " ? numberOfSquares = 3 : numberOfSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
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

}

function reset(){
  // nya färger
  colors = generateRandomColors(numberOfSquares);
  // uppdatera färger
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
  //
  for (var i=0;i<squares.length;i++){
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = " New Colors ";
}

resetButton.addEventListener("click", function(){
  reset();
});

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
