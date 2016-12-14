/**
 * Created by johnbecker on 2016-09-17.
 */
'use strict';
var $ = require('jquery');

class Helper{
  constructor(modalPanel){
    this.modalPanel = modalPanel;
  }

  tiger(){
    console.log(this.modalPanel);
    this.modalPanel.hide();
  }

  hide(){
    $(".tiger-package").addClass("hide");
  }

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
}

//important to export or else NodeJS can't pick it up
module.exports = Helper;
