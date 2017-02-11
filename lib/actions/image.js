'use babel';

export default function(editor){
  let selection = editor.getSelectedText();

  if(selection==''){
    editor.insertText('![Alt-text](http://path/to/image.jpg)');
  }
  else{
    editor.insertText(`![Alt-text](${selection})`);
  }
}
