'use babel';
var markdownlint = require("markdownlint");
/*
  Markdown toolbar functions and markdown validator.
*/

export default function(){
  let editor = atom.workspace.getActiveTextEditor();
  let content = editor.getText();
  let options = {
        "strings": {
        "content": content,
        },
        "resultVersion": 1
        };
  return markdownlint.sync(options);
}
