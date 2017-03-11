'use babel';
MDPreview = require('../models/mdpreview.js');
import { CompositeDisposable } from 'atom';

export default function(Veditor) {

    if(!controller.getMarkdownPreviewVisibility())
    {
    controller.toggleMarkdownPreviewVisibility();
    //create the subscriptions class
    previewsubscription = new CompositeDisposable();
    pane = atom.workspace.getActivePane().splitRight();
    //add the markdown preview class to the split panel
    pane.addItem(controller.getMarkdownPreview());
    pane.onDidDestroy(kill);

    controller.updateMDPreview(new MDPreview(Veditor.getText(),Veditor.getPath()).toString());
    controller.toggleIcon('chrome');

    previewsubscription.add(atom.workspace.observeTextEditors((editor)=>{
     previewsubscription.add(editor.onDidStopChanging((editor) =>{
       //TODO:there has got to be a better way to do this
       controller.updateMDPreview(new MDPreview(Veditor.getText(),Veditor.getPath()).toString());
     }))

   }));
  }
  else{
    pane.destroy();
  }
    function kill(){
      controller.toggleIcon('chrome');
      controller.toggleMarkdownPreviewVisibility();
      previewsubscription.dispose();
      pane.destroy();
      previewsubscription = null;
      pane = null;
    }
}
