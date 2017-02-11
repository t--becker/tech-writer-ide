'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class TrelloView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'trello';
    this.element.classList.add('trello');

    let board = document.createElement('div');
    board.id = 'trello-board';
    board.classList.add('trello-board');

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

  update(html){
    this.element.innerHTML = html;
  }

  updateBoards(html){
    let board = document.getElementById('trello-board');
    board.innerHTML = html;
  }


}
