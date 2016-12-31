'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class MarkDownValidatorView{

  constructor(serializedState) {

    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'markdown-error-panel';
    this.element.classList.add('markdown-error-panel');

    //creates the panel title
    title = document.createElement('title');
    title.id ="markdown-error-panel-title";
    this.element.appendChild(title);

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

  setTitle(title){
    document.getElementById('markdown-error-panel-title').textContent = title;
  }



  /*
  Builds the invalid markdown warning div.
  */
  setInvalidMarkdownWarning(){
    let warning = document.createElement('div');
    warning.id = 'markdown-error-panel-span';
    warning.classList.add('markdown-error-panel-invalid-warning');
    warning.textContent = "Invalid markdown file.";

    this.updateView(warning);
  }

  clearView()
  {
    let divTop = document.getElementById('markdown-error-panel');
    let span = document.getElementById('markdown-error-panel-span');
    if(span!=null&&divTop!=null)
    {
      divTop.removeChild(span);
    }

  }



}
