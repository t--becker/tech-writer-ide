'use babel';
import {CompositeDisposable, Emitter} from 'atom';

export default class TigerPackageView {

  constructor(serializedState) {
    this.subscriptions = new CompositeDisposable();
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tiger-package');
    this.element.id = 'tiger-package';

    //BUILD MARKDOWN TOOLBAR
    var markdownButtons = ['bold', 'italic', 'table', 'image', 'link' , 'list', 'strikethrough', 'code'];
    this.buildToolbarGroup(markdownButtons, 'markdown');

    //BUILD PANEL TOOLBAR
    var panelButtons = ['check-circle', 'tasks', 'chrome'];
    this.buildToolbarGroup(panelButtons, 'panel');

  }

  /*
  Sets the on-active color for the clicked element.
  */
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
    Builds a toolbar grouping.
    @icons is the arraylist of icons
    @id is the id of the grouping
  */
  buildToolbarGroup(icons, id){
    let ul = document.createElement('ul');
    ul.classList.add('button-group', id);

    for (let icon of icons) {
      let btn = document.createElement('li');
      btn.classList.add('fa', 'fa-'+icon);
      btn.id = icon;
      if(id=="markdown")
      {
        btn.onclick = ()=>{this.functionLookup(icon)};
      }
      if(id=="panel"){
        btn.onclick = ()=>{
          this.changeIconColor(btn);
          this.functionLookup(icon);};
      }
      ul.appendChild(btn);
      }
      this.updateView(ul);
  }

  /*
  Assigns the function to the icon based off the icon name.
  */
  functionLookup(fname){
    const editor = atom.workspace.getActiveTextEditor();

      switch(fname){
        case "bold":
          return markdownFunctions.insertBold();
          break;

        case "table":
            return markdownFunctions.insertTable();
            break;

        case "link":
            return markdownFunctions.insertLink();
            break;

        case "list":
            return markdownFunctions.insertList();
            break;

        case "italic":
            return markdownFunctions.insertItalics();
            break;

        case "image":
            return markdownFunctions.insertImage(editor);
            break;

        case "code":
            return markdownFunctions.insertCode(editor);
            break;
        case "strikethrough":
            return markdownFunctions.insertStrikeOut();
            break;
        case "check-circle":
            return controller.openMarkdownPanel();
            break;
        case "tasks":
            return controller.openRightPanel();
            break;
        case "chrome":
            return alert("Markdown Preview");
            break;
      }
    }

}
