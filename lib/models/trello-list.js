'use babel';

class List{

  constructor(listObj){
    this.id = listObj['id'];
    this.idBoard = listObj['idBoard'];
    this.name = listObj['name'];
    this.cards = new Array();
  }

  getID(){return this.id;}

  getIDBoard(){return this.idBoard;}

  getName(){return this.name;}

  setCards(card){this.cards.push(card);}

  getCards(){return this.cards;}

}
module.exports = List;
