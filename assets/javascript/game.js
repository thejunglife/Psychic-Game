/* Need to make an array of letters to choose from
create variables for Wins, Losses, Guesses Left, Your guesses so far
make a function that allows user to click a letter to start playing.

if player chooses right letter
   log it as a win and game will restart
else if player chooses wrong letter
  players guess count will go down by -1 from 9
  players wrong guesses will be logged to yourGuesses for reference
else
 if player goes down to 0 guesses game will restart and player will get a loss
*/

let computerGuesses = 'abcdefghijklmnopqrstuvwxyz'.split('');

let wins = 1;
let losses = 1;
let guessesLeftNow = 9;
let guesses = [];


let guessesSoFar = function() {
  document.getElementById('guesses').innerHTML = 'Your Guesses So Far: ' + guesses.join(',');
};
//  resets game to starting point w/o refreshing page
function reset () {
  guessesLeftNow = 9;
  guesses = [];
};



// game starts when user pushes a key

document.onkeyup = function(start) {

  let userGuess = event.key;
  // doesn't allow user to use same key.
  if (guesses.includes(userGuess)) {
    return alert('You already chose this letter!')
    
  };

  let computerChoice = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
  guesses.push(userGuess);
  guessesSoFar();

 if (userGuess === computerChoice) {
   document.getElementById('wins').innerHTML = 'Wins: ' + wins;
   wins ++;
   guessesLeftNow = 8;
   guesses = [];
 } 

 else {
   document.getElementById('guessesLeft').innerHTML = 'Guesses Left: ' + guessesLeftNow;
   guessesLeftNow--;
 }

 if (guessesLeftNow === -1) {
   document.getElementById('losses').innerHTML = 'Losses: ' + losses 
   guessesLeftNow = 8;
   losses++;
   guesses = [];
 };


 };






