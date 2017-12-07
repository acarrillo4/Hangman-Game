//could not get function to reset game and/or get next word without refresh - which in turn didn't keep counter each time for wins :( Reached out to Dartaniel so I can get some tutoring over some of this material
//create an array of words
var words = ['paws', 'puppy', 'treat', 'bone', 'pitbull'];
//choose word randomly
var indexWords = Math.floor(Math.random() * words.length);
var chosenWord = words[indexWords];
var currentPuzzle = [];
var wrongChoices = [];
var winsCount = 0;
var leftGuesses = 12;
document.getElementById("guessLeft").innerHTML = leftGuesses;
console.log(indexWords);
console.log(chosenWord);

//create underscores based on the length of the word chosen
for (var i=0; i < chosenWord.length; i++) {
currentPuzzle.push("_ ");
}
var stringPuzzle = currentPuzzle.join("");
document.getElementById("puzzle").innerHTML = stringPuzzle;

//get users guess
document.onkeyup = function(event) {
var userChoice = event.key;
console.log(userChoice);
// if user choice in the word
if (chosenWord.indexOf(userChoice)!== -1) {
    //for each letter in word, go through and see if user choice is a match
    for (var j = 0; j < chosenWord.length; j++) {
        //if it is a match, replace it in the puzzle
        if (userChoice === chosenWord[j]) {
            currentPuzzle[j] = userChoice;
        }
    }
}
//if users choice is not in the word
//make sure wrong choice isn't already logged, if its not add it to the wrong choice list
else if (wrongChoices.indexOf(userChoice) === -1) {
    wrongChoices.push(userChoice);
    leftGuesses -= 1;
}
//look over currentPuzzle array and turn into upper case string to display
//look over wrongChoices array and turn into upper case string to dispaly 
var currentAnswer = currentPuzzle.join("");
var currentWrong = wrongChoices.join(" ");
var upperWrong = currentWrong.toUpperCase();
document.getElementById("guessLeft").innerHTML = leftGuesses;
document.getElementById("puzzle").innerHTML = currentAnswer;
document.getElementById("wrongGuess").innerHTML = upperWrong;
if (leftGuesses === 0) {
alert("Game Over - Hit Refresh to start over!")
}
else if (currentAnswer === chosenWord) {
document.getElementById("puzzle").innerHTML = "YOU WIN! The word is " + currentAnswer;
winsCount += 1;
}
}