'use babel';

class TrelloLISTS{

  constructor(listsObj){
    this.listsObj = listsObj;
  }


  getBoards(){
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
