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

    this.element.appendChild(board);

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

  __hello(message){
    //alert(message);
    controller.hello(message);
  }

  updateBoards(boards){
    let trelloboards = document.getElementById('trello-boards');
    //clear the board
    trelloboards.innerHTML = "";
    for(let board of boards){
      trelloboards.appendChild(this._makeBoardButton(board));
    }
  }

  _makeBoardButton(board){
    let x = document.createElement("BUTTON");
    let t = document.createTextNode(board.name);
    x.appendChild(t);
    x.addEventListener('click', event => this.__hello(board.id), false);
    return x;
  }

}
