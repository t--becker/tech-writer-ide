'use babel';
var $ = require('jquery');
import {CompositeDisposable, Emitter} from 'atom';

export default class TigerPackageView {

  constructor(serializedState) {
    this.subscriptions = new CompositeDisposable();
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tiger-package');
    this.element.id = 'tiger-package';

    // Create the hide button
    btn = document.createElement('span');
    btn.classList.add('icon', 'icon-x');
    btn.id = 'hide';
    btn.onclick = function(){controller.close()};
    btnlabel = document.createTextNode('HIDE');
    btn.appendChild(btnlabel);

    // Create the table button
    btn2 = document.createElement('span');
    btn2.classList.add('icon', 'icon-calendar');
    btn2.id = 'mdtable';
    btn2.onclick = function(){panelFunction.insertTable()};
    btn2.appendChild(document.createTextNode('TABLE'));

    //creates the h1 checking button
    headingsButton = document.createElement('span');
    headingsButton.classList.add('icon', 'icon-gist');
    headingsButton.id = 'headingButton';
    headingsButton.onclick = function(){panelFunction.checkMDHeadings()};
    headingsButton.appendChild(document.createTextNode('H1'));

    // Create the open panel button
    btn3 = document.createElement('span');
    btn3.classList.add('icon', 'icon-diff-renamed');
    btn3.id = 'openpanel';
    btn3.onclick = function(){controller.openRightPanel()};
    btn3.appendChild(document.createTextNode('PANEL'));



    //sets the toolsips
    this.subscriptions.add(atom.tooltips.add(btn, {title: "Hides the panel"}));
    this.subscriptions.add(atom.tooltips.add(btn2, {title: "Inserts empty markdown table"}));
    this.subscriptions.add(atom.tooltips.add(btn3, {title: "Opens the right panel"}));
    this.subscriptions.add(atom.tooltips.add(headingsButton, {title: "Validates markdown headings"}));

    this.element.appendChild(btn);
    this.element.appendChild(btn2);
    this.element.appendChild(headingsButton);
    this.element.appendChild(btn3);
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
