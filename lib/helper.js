/**
 * Created by johnbecker on 2016-09-17.
 */
'use strict';
var $ = require('jquery');

function Helper(modalPanel){
    this.modalPanel = modalPanel;
}

Helper.prototype ={
    constructor: Helper,

    /*
      Hides the panel.
     */
    tiger: function(){
        console.log(this.modalPanel);
        this.modalPanel.hide();
      },
      /*
      Also hides the panel, but in another way.
      */
      hide: function(){
        $(".tiger-package").addClass("hide");
      },

      /*
      Inserts a sample markdown table.
      */
      insertTable: function(){
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
};

//important to export or else NodeJS can't pick it up
module.exports = Helper;
