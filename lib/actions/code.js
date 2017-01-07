'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      //editor.insertText("\n```\ncode\n```");
      editor.insertText(`
\`\`\`javascript
function print() {
  console.log("who said coding and writing was easy?");
}
\`\`\`
`);
    }
    else{
      editor.insertText(`
\`\`\`
${selection}
\`\`\`
`);
  }
}
