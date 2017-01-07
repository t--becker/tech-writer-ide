'use babel';
var lang = require('lang-detector');

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`
\`\`\`javascript
function print() {
  console.log("who said coding and writing was easy?");
}
\`\`\`
`);
    }
    else{
      let code = lang(selection).toLowerCase();
      if(code=='unknown'){code='javascript'}
      editor.insertText(`
\`\`\`${code}
${selection}
\`\`\`
`);
  }
}
