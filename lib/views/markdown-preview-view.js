'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkdownPreviewView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('md-preview');
    this.visible = false;

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  getVisible(){
    return this.visible;
  }

  toggleVisibility()
  {
    if(this.visible)
    {
      this.visible = false;
    }
    else{
      this.visible = true;
    }
  }

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getTitle(){
    return 'MD Preview';
  }

  update(html){
    this.element.innerHTML = html;
  }


}
