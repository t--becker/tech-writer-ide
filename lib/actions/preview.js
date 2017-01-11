'use babel';
MDPreview = require('../models/mdpreview.js');

export default function(Veditor) {
    //TODO:
          //check that the file is markdown before rendering
          //iterate through and find the special atlas tags and
          //convert them into the appropriate thing

    var pane = atom.workspace.getActivePane().splitRight();
    pane.addItem(controller.getMarkdownPreview());

    pane.onDidDestroy(dispose);

    mdpreview = new MDPreview(Veditor.getText());
    controller.updateMDPreview(mdpreview.toString());
    //console.log(mdpreview.toString());
    //register observer
    /*
    var disposer = atom.workspace.observeTextEditors((editor)=>{
      editor.onDidStopChanging((editor) =>{
        controller.updateMDPreview(markdown.toHTML(Veditor.getText()));
        })
      });
*/
    function dispose(){
      disposer.dispose();
    }
}
