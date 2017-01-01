'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class TigerPackageView {

  constructor(serializedState) {
    this.subscriptions = new CompositeDisposable();
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tiger-package');
    this.element.id = 'tiger-package';

    let ul = document.createElement('ul');
    ul.classList.add('button-group');

    // MARKDOWN VALIDATOR BUTTON
    btn2 = document.createElement('li');
    btn2.classList.add('fa', 'fa-check-circle');
    btn2.id = 'mdtable';
    btn2.onclick = ()=>{
      this.changeIconColor(btn2);
      controller.openMarkdownPanel();};

    // JIRA BUTTON
    btn3 = document.createElement('li');
    btn3.classList.add('fa', 'fa-tasks');
    btn3.id = 'openpanel';
    btn3.onclick = ()=>{
      this.changeIconColor(btn3);
      controller.openRightPanel();};

    //TOOLTIPS
    this.subscriptions.add(atom.tooltips.add(btn3, {title: "Opens JIRA task panel"}));
    this.subscriptions.add(atom.tooltips.add(btn2, {title: "Validates markdown"}));


    //MARKDOWN TOOLBAR
    var buttons = ['bold', 'italic', 'table', 'link' , 'list', 'strikethrough', 'code'];
    this.buildMarkdownToolbar(buttons);

    ul.appendChild(btn2);
    ul.appendChild(btn3);
    this.element.appendChild(ul);
  }

  changeIconColor(icon){
    switch(icon.style.color){
      case "" :
        icon.style.color = "red";
        break;

      case "red" :
        icon.style.color = "white";
        break;

      case "white" :
        icon.style.color = "red";
        break;

      default :
        icon.style.color = "white";
        break;
    }
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
    let ul = document.createElement('ul');
    ul.classList.add('button-group');

    for (let icon of icons) {
      let btn = document.createElement('li');
      btn.classList.add('fa', 'fa-'+icon);
      btn.id = icon;
      btn.onclick = ()=>{markdownFunctions.functionLookup(icon)};
      ul.appendChild(btn);
      }
      this.updateView(ul);
  }


}
