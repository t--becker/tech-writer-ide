'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`{{% warning %}}I am warning you.{{% /warning %}}`);
    }
    else{
      editor.insertText(`{{% warning %}}${selection}{{% /warning %}}`);
  }
}
