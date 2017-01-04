'use babel';

export default function(editor) {
    const selection = editor.getSelectedText();

    if(selection==''){
      editor.insertText('~~S~~');
    }
    else{
      editor.insertText(`~~${selection}~~`);
  }


}
