'use babel';
var $ = require('jquery');
var markdownlint = require("markdownlint");

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
  validateMarkdown(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor)
    {
        //check if it's an MD file at first
        if(editor.getTitle().split('.').pop()==='md'){
          let content = editor.getText();
          let options = {
            "strings": {
              "content": content,
            },
            "resultVersion": 1
          };

            let result = markdownlint.sync(options);
            console.dir(result);
            return result;
            //console.log(result.toString(true));


        }
        else{
          alert('not markdown');
        }


        //alert(editor.getText());
        //console.log('======= Buffer line count '+editor.getLineCount());
        //console.log('====== Screenline'+editor.getScreenLineCount());
        //console.log('----- Title'+editor.getTitle());
        //console.log('buffer range '+ editor.getCurrentParagraphBufferRange());
    }

  }


}

//important to export or else NodeJS can't pick it up
module.exports = PanelFunction;
