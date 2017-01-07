'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`{{% tip %}}Here's a tip for you.{{% /tip %}}`);
    }
    else{
      editor.insertText(`{{% tip %}}${selection}{{% /tip %}}`);
  }
}
