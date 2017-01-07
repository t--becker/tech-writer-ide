'use babel';

export default function(editor) {
  let path = 'docs/content/';
  let file = pickFile();
  if(file!=null){
    if(file.includes(path)){
      file = path + file.split(path).pop();
    }

    editor.insertText("{{< include path=\""+file+"\">}}");
  }

  //this function copied from: https://discuss.atom.io/t/pick-file-like-atom-pickfolder/20815
  function pickFile() {
    var remote = require('electron').remote;
    var files = remote.dialog.showOpenDialog(remote.getCurrentWindow(), {properties: ['openFile']});
    if(files && files.length) {
        return files[0];
    }
    return null;
  }
}
