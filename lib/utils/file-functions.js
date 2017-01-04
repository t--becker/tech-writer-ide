'use babel';

/*
  FileFunctions reads and writes files in the editor.
*/
class FileFunctions{
  constructor(){}

  /*
  Checks if the current file in the active panel is markdown and returns true||false.
  */
  isMarkdown(){
    if(this.getCurrentTitle().split('.').pop()==='md'){
      return true;
    }
    else{
      return false;
    }
  }

  /*
  Gets the title of the active file.
  */
  getCurrentTitle(){
    let editor = atom.workspace.getActiveTextEditor();
    if(editor)
    {
      return editor.getTitle();
    }
    else{
      return 'invalid file title';
    }
  }


}
//important to export or else NodeJS can't pick it up
module.exports = FileFunctions;
