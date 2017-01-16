'use babel';

export default function(editor){
  let selection = editor.getSelectedText();

  if(selection==''){
    editor.insertText(`
* bullet
* bullet
* bullet`);
  }
  else{
    let bullets = selection.replace(/\n/g,' ').split(' ');

    bullets.toString = function(){
      for(let i=0; i<this.length; i++){
        this[i] = '* ' + this[i];
      }
      return this.join("\r\n");
    }

    editor.insertText(bullets.toString());
  }
}
