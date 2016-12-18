/**
 * Created by johnbecker on 2016-09-17.
 */
'use babel';
var $ = require('jquery');

class Helper{
  constructor(modalPanel, rightPanel){
    this.modalPanel = modalPanel;
    this.rightPanel = rightPanel;
  }

  close(){
    console.log(this.modalPanel);
    this.modalPanel.hide();
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


  openRightPanel(){
    this.rightPanel.isVisible() ?
    this.rightPanel.hide() :
    this.rightPanel.show()
  }

  alerting(){
    alert('fucking hell');
  }


  alertingAgain(visible){
    alert('fucking helssssl');
  }

}

//important to export or else NodeJS can't pick it up
module.exports = Helper;
