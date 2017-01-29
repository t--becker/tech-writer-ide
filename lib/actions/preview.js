'use babel';
MDPreview = require('../models/mdpreview.js');
import { CompositeDisposable } from 'atom';

export default function(Veditor) {
    //create the subscriptions class
    var previewsubscription = new CompositeDisposable();
    var pane = atom.workspace.getActivePane().splitRight();
    //add the markdown preview class to the split panel
    pane.addItem(controller.getMarkdownPreview());
    pane.onDidDestroy(dispose);
    var path = Veditor.getPath();

    controller.updateMDPreview(new MDPreview(Veditor.getText(),Veditor.getPath()).toString());

    previewsubscription.add(atom.workspace.observeTextEditors((editor)=>{
     previewsubscription.add(editor.onDidStopChanging((editor) =>{
       //TODO:there has got to be a better way to do this
       controller.updateMDPreview(new MDPreview(Veditor.getText(),Veditor.getPath()).toString());
     }))

   }));

    function dispose(){
      previewsubscription.dispose();
      previewsubscription = null;
      pane.destroy();
    }
}
