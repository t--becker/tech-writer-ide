'use babel';

export default function(editor) {
    const selection = editor.getSelectedText();

    if(selection==''){
      editor.insertText('*I*');
    }
    else{
      editor.insertText(`*${selection}*`);
  }


}
