'use babel';
MDPreview = require('../models/mdpreview.js');

export default function(Veditor) {

    var pane = atom.workspace.getActivePane().splitRight();
    //add the markdown preview class to the split panel
    pane.addItem(controller.getMarkdownPreview());
    pane.onDidDestroy(dispose);
    var path = Veditor.getPath();

    controller.updateMDPreview(new MDPreview(Veditor.getText(),Veditor.getPath()).toString());

    //controller.updateMDPreview(new MDPreview(Veditor.getText()).toString());

    var subscription = atom.workspace.observeTextEditors((editor)=>{
      editor.onDidStopChanging((editor) =>{
        //TODO:there has got to be a better way to do this
        controller.updateMDPreview(new MDPreview(Veditor.getText(),Veditor.getPath()).toString());
        })
      });

    function dispose(){
      subscription.dispose();
    }
}
