var cards = [ {
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
}, {
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
}, {
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
}, {
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("Sorry, try again..");
	} else {
  		alert("You found a match!");
	}
};

function flipCard(cardID) {
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	cardsInPlay.push(cards[cardID].name);
	console.log('User Flipped ' + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
};

flipCard(0);
flipCard(2);
checkForMatch();


