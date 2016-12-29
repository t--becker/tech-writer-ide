'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkdownToolBarView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('markdown-toolbar');
    this.element.appendChild(document.createTextNode('Markdown toolbar'));
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


}
