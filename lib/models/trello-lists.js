'use babel';

class TrelloLISTS{

  constructor(listsObj){
    this.listsObj = listsObj;
  }

  /*
  LIST OBJECT
    lists
      -> name *list's name*
      -> id *list's id*
    cards
      ->

  */
  getLists(){
    let array = new Array();
    for(let elm of this.boardObj)
    {
      let o = new Object();
      o.name = elm['name'];
      o.id = elm['id'];
      array.push(o);
    }
    return array;

  }



}
module.exports = TrelloLISTS;
