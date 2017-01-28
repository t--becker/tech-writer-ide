'use babel';
var markdownlint = require("markdownlint");
/*
  Markdown toolbar functions and markdown validator.
*/

export default function(){
  let editor = atom.workspace.getActiveTextEditor();
  let content = editor.getText();
  //markdown validator options
  let options = {
        "strings": {
        "content": content,
        },

        "resultVersion": 1
        };
  //sets the validator to ignore the front matter.
  options.frontMatter = /^---$[^]*?^---$(\r\n|\r|\n)/ig;
  return markdownlint.sync(options);
}
