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

//The solution came out correct. However wtf does this even mean? 
//"Now, call the checkForMatch function from inside the flipCard function, where the lines above used to sit inside the if statement."
//When I call it in the function it doesn't work. Its scoped??? Am I missing something here?
//Just gonna leave it be for now...


