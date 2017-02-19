'use babel';

class Card{

	constructor(cardObj){
		this.name = cardObj['name'];
		this.id = cardObj['id'];
		//the id of the list the card belongs to
		this.idList = cardObj['idList'];
		this.description = cardObj['desc'];
		this.labelColor = cardObj['labels'][0]['color'];
	}

	getName(){return this.name;}

	getID(){return this.id;}

	getListID(){return this.idList;}

	getDescription(){return this.description;}

	getLabel(){return this.labelColor;}


}
module.exports = Card;
