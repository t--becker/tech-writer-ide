'use babel';

export default function(editor){
  let selection = editor.getSelectedText();

  if(selection==''){
    editor.insertText(`
1. step
2. step
3. step`);
  }
  else{
    let bullets = selection.split('\n');

    bullets.toString = function(){
      for(let i=0; i<this.length; i++){
        this[i] = (i+1)+'. ' + this[i];
      }
      return this.join("\r\n");
    }

    editor.insertText(bullets.toString());
  }
}
