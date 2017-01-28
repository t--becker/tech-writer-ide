'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`{{% tip title="TIP" %}}Here's a tip for you.{{% /tip %}}`);
    }
    else{
      editor.insertText(`{{% tip title="TIP" %}}${selection}{{% /tip %}}`);
  }
}
