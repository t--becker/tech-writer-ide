'use babel';
var markdownlint = require("markdownlint");

/*
  Markdown toolbar functions and markdown validator.
*/
class MarkdownFunctions{
  constructor(){}

  /*
    Retreives the content of the active text editor and validates markdown headings.
  */
  validateMarkdown(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor&&fileFunctions.isMarkdown())
    {
        let content = editor.getText();
        let options = {
          "strings": {
          "content": content,
          },
          "resultVersion": 1
          };

        return markdownlint.sync(options);
    }
  }

  /*
  Bolds the selected text or inserts **** if no text is selected
  */
  insertBold(){
    wFns.textHighlight('**');
  }

  insertLink(){

  }

  insertList(){

  }
  /*
  Italicizes the selected text or inserts ** if no text is selected
  */
  insertItalics(){
    wFns.textHighlight('*');
  }

  /*
  Strikesout the selected text or inserts ~~~~ if no text is selected
  */
  insertStrikeOut(){
    wFns.textHighlight('~~');
  }
  
  insertCode(){

  }

  /*
  Inserts a sample markdown table into the active editor at the cursor or the selected text.
  */
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
  Looks up the markdown function by the given function name and returns the function.
  */
  functionLookup(fname){
      switch(fname){
        case "bold":
          return this.insertBold();
          break;

        case "table":
            return this.insertTable();
            break;

        case "link":
            return this.insertLink();
            break;

        case "list":
            return this.insertList();
            break;

        case "italic":
            return this.insertItalics();
            break;

        case "code":
            return this.insertCode();
            break;
        case "strikethrough":
            return this.insertStrikeOut();
            break;
      }
    }
}
//important to export or else NodeJS can't pick it up
module.exports = MarkdownFunctions;
