var cards = ['queen' , 'queen' , 'king' , 'king'];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
};

function flipCard(cardID) {
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	cardsInPlay.push(cards[cardID]);
	console.log('User Flipped ' + cards[cardID]);
};

flipCard(0);
flipCard(2);
checkForMatch();

//Still learning about gitHub.


