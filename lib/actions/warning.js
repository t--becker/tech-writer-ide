'use babel';

export default function(editor) {
    let selection = editor.getSelectedText();
    if(selection==''){
      editor.insertText(`{{% warning title="WARNING" %}}I am warning you.{{% /warning %}}`);
    }
    else{
      editor.insertText(`{{% warning title="WARNING" %}}${selection}{{% /warning %}}`);
  }
}
