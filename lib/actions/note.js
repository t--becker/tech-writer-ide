'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`{{% note title="NOTE" %}}Take note of this.{{% /note %}}`);
    }
    else{
      editor.insertText(`{{% note title="NOTE" %}}${selection}{{% /note %}}`);
  }
}
