'use babel';
var $ = require('jquery');
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkDownValidatorView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'markdown-error-panel';
    this.element.classList.add('mardown-error-panel');
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

  updateView(content){
    //clear the dom element
    this.element.innerHTML = '';
    this.element.appendChild(content);
  }



}
