//an array to holdl the color sequence.
var buttonColors = ["red", "blue", "green", "yellow"];
//an empty array called gamePattern
var gamePattern = [];

// a function to create a random number and link the generated random # with the color array.
function nextSequence(){
    //random number between 0 & 3
    var randomNumber = Math.floor(Math.random()*4);
    //creating a random color
    var randomeChosenColor = randomNumber[buttonColors];
    // adding the random color generated into gamePattern
    gamePattern.push(randomeChosenColor);

    // jQery to link button, sound and randomly selected color. 
    $("#"+randomeChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomeChosenColor+".mp3");
    audio.play();
}


