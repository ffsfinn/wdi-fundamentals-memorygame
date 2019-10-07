var cards = ['queen' , 'queen' , 'king' , 'king'];
var cardsInPlay = [];

function checkForMatch() {
	// The logic is here, in this function now.
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
};

function flipCard(cardID) {
	if (cardsInPlay.length === 2) {
		// The logic used to be here but now is in the function checkForMatch, which is now called.
		checkForMatch();
	}
	cardsInPlay.push(cards[cardID]);
	console.log('User Flipped ' + cards[cardID]);
};

flipCard(0);
flipCard(2);
checkForMatch();

// Basically all this is having you do is move the logic that determines if you have a match into it's own
// function so you can use it in the future without having to write it again. Re-usable code is the best.