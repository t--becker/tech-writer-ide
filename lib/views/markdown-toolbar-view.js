'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkdownToolBarView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('markdown-toolbar');
    this.element.id = 'markdown-toolbar';

    var buttons = ['table', 'link' , 'list'];

    this.element.appendChild(panelFunction.buildMarkdownToolbar(buttons));


    let btn = document.createElement('span');
    btn.classList.add('fa', 'fa-table');
    btn.id = 'table';
    btn.onclick = function(){panelFunction.insertTable()};

    let link = document.createElement('span');
    link.classList.add('fa', 'fa-link');
    link.id = 'link';
    link.onclick = function(){};

    let list = document.createElement('span');
    list.classList.add('fa', 'fa-list');
    list.id = 'list';
    list.onclick = function(){};



    //this.element.appendChild(btn);
    //this.element.appendChild(link);
    //this.element.appendChild(list);
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
