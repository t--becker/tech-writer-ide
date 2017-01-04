'use babel';

export default function(editor) {
    const selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText('**B**');
    }
    else{
      editor.insertText(`**${selection}**`);
  }
}
