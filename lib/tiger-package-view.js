'use babel';
var $ = require('jquery');
import {CompositeDisposable, Emitter} from 'atom';

export default class TigerPackageView {

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tiger-package');
    this.element.id = 'tiger-package';

    // Create the hide button
    btn = document.createElement('span');
    btn.classList.add('icon', 'icon-x');
    btn.id = 'hide';
    btn.onclick = function(){helper.tiger()};
    btnlabel = document.createTextNode('HIDE');
    btn.appendChild(btnlabel);

    // Create the table button
    btn2 = document.createElement('span');
    btn2.classList.add('icon', 'icon-diff-renamed');
    btn2.id = 'openpanel';
    btn2.onclick = function(){helper.insertTable()};
    btn2.appendChild(document.createTextNode('TABLE'));

    // Create the new panel button
    btn3 = document.createElement('span');
    btn3.classList.add('icon', 'icon-');



    this.element.appendChild(btn);
    this.element.appendChild(btn2);
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

  //inserts some text at the tiger-package modelPanel
  insertTextElement(){
      $("#tiger-package").append("some appended text");
  }

}
