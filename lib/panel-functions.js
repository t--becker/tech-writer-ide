'use babel';
var $ = require('jquery');

class PanelFunction{
  constructor(){}


  insertTable(){
    var editor = atom.workspace.getActiveTextEditor();
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

  checkMDHeadings(){
    alert('checking headings');
  }


}

//important to export or else NodeJS can't pick it up
module.exports = PanelFunction;
