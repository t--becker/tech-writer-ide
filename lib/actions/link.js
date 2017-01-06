'use babel';

export default function(editor) {
    const selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`[link-title](http://link/path)`);
    }
    else{
      editor.insertText(`[link-title](${selection})`);
    }
}
