'use babel';

export default function(editor){
  let text = editor.getSelectedText();
  var regex = /([^\s]+)\.(jpeg|jpg|gif|png)/gi;

  if(text.search(regex) != -1){
    editor.insertText(text.replace(regex, link));
  }
  else{
    editor.insertText('![Alt-text](http://path/to/image.jpg)');
  }

  function link(elm){
    return '![Alt-text]('+elm+')';
  }
}
