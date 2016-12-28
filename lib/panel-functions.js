'use babel';
var markdownlint = require("markdownlint");

/*
  Panel functions are miscellaneous functions to initiate on the panel.
*/
class PanelFunction{
  constructor(){}

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
  Checks if the current file in the active panel is markdown and returns true||false.
  */
  isMarkdown(){
    if(this.getCurrentTitle().split('.').pop()==='md'){
      return true;
    }
    else{
      return false;
    }
  }

  /*
  Gets the title of the active file.
  */
  getCurrentTitle(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor)
    {
      return editor.getTitle();
    }
    else{
      return 'invalid file title';
    }

  }

  /*
    Retreives the content of the active text editor and validates markdown headings.
  */
  validateMarkdown(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor&&this.isMarkdown())
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

  */
  getInvalidMarkdownWarning(){
    let warning = document.createElement('div');
    warning.id = 'markdown-error-panel-span';
    warning.classList.add('markdown-error-panel-invalid-warning');
    warning.textContent = "Invalid markdown file.";

    return warning;
  }

}

//important to export or else NodeJS can't pick it up
module.exports = PanelFunction;
