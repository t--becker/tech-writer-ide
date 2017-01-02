'use babel';

/*

*/
class WorkspaceFns{

  constructor(){}

  /*
    Returns the active text editor.
  */
  getActiveEditor(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor)
    {
      return editor;
    }
    else{
      console.log("ERROR: Can't return active text editor.")
    }
  }

  /*
  Highlights the selected text with the given markdown highlighter.
  */
  textHighlight(letter){
    let editor = this.getActiveEditor();
    if(editor.getSelectedText()==''){
      editor.insertText(letter+letter);
    }
    else{
      editor.insertText(letter+editor.getSelectedText()+letter);
    }
  }

}


module.exports = WorkspaceFns;
