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
    this.textHighlight('**');
  }

  insertLink(){
    //	[title](http://)

  }

  insertImage(editor){
    let text = editor.getSelectedText();

    //if string is empty, just insert markdown link
    if(text.trim() == ''){
      editor.insertText('![Alt-text](http://path/to/image.jpg)');
    }
    else{
      let arrayLink = text.split(' ');
      let arrayLength = arrayLink.length;

      //if it's one word, insert markdown link with word as the link
      if(arrayLength == 1){
        editor.insertText('![Alt-text]('+text+')');
      }
      //if it's more than one word, lets try to help the user out and make
      //a link where possible
      if(arrayLength >= 2){
          let exists = false;
          console.log('sdfsd');
          for (var i = 0; i < arrayLength; i++) {
              if(this.checkImageInURL(arrayLink[i])){
                arrayLink[i] = '![Alt-text]('+arrayLink[i]+')';
                exists = true;
              }
            }
            if(exists){
              editor.insertText(arrayLink.join(' '));
            }
            else{
              editor.insertText('![Alt-text](http://path/to/image.jpg)');
            }

      }
    }

  }
  /*
  Returns TRUE if the string contains an image identifier
  Returns FALSE otherwise
  */
  checkImageInURL(url) {
      return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  insertList(){

  }
  /*
  Italicizes the selected text or inserts ** if no text is selected
  */
  insertItalics(){
    this.textHighlight('*');
  }

  /*
  Strikesout the selected text or inserts ~~~~ if no text is selected
  */
  insertStrikeOut(){
    this.textHighlight('~~');
  }

  insertCode(){

  }

  /*
  Inserts a sample markdown table into the active editor at the cursor or the selected text.
  */
  insertTable(editor){
      editor.insertText(`
  | Tables   |      Are      |  Cool |
  |----------|:-------------:|------:|
  | col 1 is |  left-aligned | $1600 |
  | col 2 is |    centered   |   $12 |
  | col 3 is | right-aligned |    $1 |`);
    }

  /*
  Highlights the selected text with the given markdown highlighter.
  */
  textHighlight(letter){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor.getSelectedText()==''){
      editor.insertText(letter+letter);
    }
    else{
      editor.insertText(letter+editor.getSelectedText()+letter);
    }
  }

}


//important to export or else NodeJS can't pick it up
module.exports = MarkdownFunctions;
