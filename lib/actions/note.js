'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`{{% note %}}Take note of this.{{% /note %}}`);
    }
    else{
      editor.insertText(`{{% note %}}${selection}{{% /note %}}`);
  }
}