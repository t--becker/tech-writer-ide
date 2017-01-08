'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class RightPanelView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('md-preview');
    this.element.appendChild(document.createTextNode('Fuck hello'));
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

  update(html){
    this.element.innerHTML = html;
  }
  showComic(data){
    p = document.createElement('p');
    p.appendChild(document.createTextNode(data));
    this.element.appendChild(p);
  }


}
