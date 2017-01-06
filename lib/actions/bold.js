'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText('**B**');
    }
    else{
      editor.insertText(`**${selection}**`);
  }
}
