'use babel';
var $ = require('jquery');

class PanelFunction{
  constructor(){}


  insertTable(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor)
    {
      //inserts text into the active editor at the cursor.
      //editor.insertText("Fuck me");
      //calls a method on the view
      editor.insertText(`
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |`);
    }
  }

  /*
    Retreives the content of the active text editor and validates markdown headings.
  */
  checkMDHeadings(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor)
    {

        alert(editor.getText());
    }

  }


}

//important to export or else NodeJS can't pick it up
module.exports = PanelFunction;
