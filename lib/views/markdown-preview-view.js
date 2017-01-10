'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkdownPreviewView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('md-preview');
    this.element.appendChild(document.createTextNode('Markdown Preview'));
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
    return 'markdown preview';
  }

  update(html){
    this.element.innerHTML = html;
  }


}
