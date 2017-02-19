'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class TrelloView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'trello';
    this.element.classList.add('trello');

    let board = document.createElement('div');
    board.id = 'trello-boards';
    board.classList.add('trello-boards');

    let lists = document.createElement('div');
    lists.id = 'trello-lists';
    lists.classList.add('trello-lists');

    this.element.appendChild(board);
    this.element.appendChild(lists);

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getTitle(){
    return 'Trello Boards';
  }

  __getBoard(boardID){
    controller.getTrelloLists(boardID);
  }

  updateBoards(boards){
    let trelloboards = document.getElementById('trello-boards');
    //clear the board
    trelloboards.innerHTML = "";
    for(let board of boards){
      trelloboards.appendChild(this._makeBoardButton(board));
    }
  }

  updateLists(listsMap){
    let trellolists = document.getElementById('trello-lists');
    //clear lists
    trellolists.innerHTML ="";
    //TODO:PRINT listsMap on pane
  }

  _makeBoardButton(board){
    let x = document.createElement("BUTTON");
    let t = document.createTextNode(board.name);
    x.appendChild(t);
    x.addEventListener('click', event => this.__getBoard(board.id), false);
    return x;
  }

}
