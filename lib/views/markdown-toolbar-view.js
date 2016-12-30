'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkdownToolBarView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('markdown-toolbar');
    this.element.id = 'markdown-toolbar';

    var buttons = ['bold', 'italic', 'table', 'link' , 'list', 'code'];
    this.updateView(this.buildMarkdownToolbar(buttons));

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
    this.element.appendChild(content);
  }

  /*
    Builds the markdown toolbar.
  */
  buildMarkdownToolbar(icons){
    let div = document.createElement('div');

    for (let icon of icons) {
      let btn = document.createElement('span');
      btn.classList.add('fa', 'fa-'+icon);
      btn.id = icon;
      btn.onclick = ()=>{markdownFunctions.functionLookup(icon)};
      div.appendChild(btn);
      }

    return div;
  }


}
