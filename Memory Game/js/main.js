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
  		alert('You found a match!'); //Stops here I believe.
	} else {
		alert('Sorry try again...'); //Not sure why this wont alert. It did before?
	};
};

function flipCard(cardElement) {
	var cardId = this.getAttribute('data-id', cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length >= 1) {
		checkForMatch();
	}
	cardsInPlay.push(cards[cardId].name);
	console.log('User Flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();

