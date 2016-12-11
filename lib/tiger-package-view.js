'use babel';
var $ = require('jquery');
import {CompositeDisposable, Emitter} from 'atom';

export default class TigerPackageView {

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tiger-package');
    this.element.id = 'tiger-package';

    // Create button element
    btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'mdtable';
    btn.onclick = function(){helper.tiger()};
    btnlabel = document.createTextNode('CLICK ME 1');
    btn.appendChild(btnlabel);

    //create the other button
    // Create button element
    btn2 = document.createElement('button');
    btn2.type = 'button';
    btn2.id = 'mdtable';
    btn2.onclick = function(){helper.insertTable()};
    btn2.appendChild(document.createTextNode('TABLE'));


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
