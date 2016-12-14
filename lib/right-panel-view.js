'use babel';
var $ = require('jquery');
import {CompositeDisposable, Emitter} from 'atom';

export default class RightPanelView {

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tiger-package');
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


}
