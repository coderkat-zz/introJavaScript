/* Create two global arrays: one to hold the letters of the word 
(e.g. 'F', 'O', 'X'), and one to hold the current guessed letters 
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X'). */

var letters = ['K', 'A', 'T'];
var match = ["_", "_", "_"];
var guessed = [];
var reward = 0;


/* Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters 
array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be 
guessed,and if not, it should congratulate the user for winning the game. */

function guessLetter(guess) {
	var correctGuess = false;
	var keepGuessing = false;
	var randomnumber = Math.floor(Math.random()*11);

	for (var i = 0; i < letters.length; i++) {
		if (guess == letters[i]) {
			match[i] = guess;
			correctGuess = true;
			console.log('Hey, you won $' + randomnumber);
			reward += randomnumber;
		}
		if (match[i] == '_') {
			keepGuessing = true;
		}
	}
      
	guessed.push(guess);{

	if (correctGuess === true) {
		console.log('Hooray! You guessed the right letter ' + guess);
		console.log(match);
          if (! keepGuessing) {
			console.log('You won $' + reward + '! Go you!');


		} else {
			console.log("Welp, that's not the word.");
            console.log('So far you have guessed ' + guessed);
		}
	} else {
        console.log("Nope, keep guessing!");
          console.log("So far you have guessed " + guessed);
          console.log(match);
          console.log('So sad, you lost $' + randomnumber);
          reward -= randomnumber;
          
	}
}
}
