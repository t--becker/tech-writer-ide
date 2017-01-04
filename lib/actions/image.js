'use babel';
import url from '../utils/url';

export default function(editor){
  let text = editor.getSelectedText();

  //if string is empty, just insert markdown link
  if(text.trim() == ''){
    editor.insertText('![Alt-text](http://path/to/image.jpg)');
  }
  else{
    let arrayLink = text.split(' ');
    let arrayLength = arrayLink.length;

    //if it's one word, insert markdown link with word as the link
    if(arrayLength == 1){
      editor.insertText('![Alt-text]('+text+')');
    }
    //if it's more than one word, lets try to help the user out and make
    //a link where possible
    if(arrayLength >= 2){
        let exists = false;
        console.log('sdfsd');
        for (var i = 0; i < arrayLength; i++) {
            if(url(arrayLink[i])){
              arrayLink[i] = '![Alt-text]('+arrayLink[i]+')';
              exists = true;
            }
          }
          if(exists){
            editor.insertText(arrayLink.join(' '));
          }
          else{
            editor.insertText('![Alt-text](http://path/to/image.jpg)');
          }
    }
  }
}
