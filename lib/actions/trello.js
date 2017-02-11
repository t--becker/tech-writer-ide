'use babel';
TrelloClient = require('../client/trello-router.js');
import { CompositeDisposable } from 'atom';

export default function(editor){

  let TC = new TrelloClient('key', 'token');

  var trellosubscription = new CompositeDisposable();
  var trellopane = atom.workspace.getActivePane().splitRight();
  trellopane.addItem(controller.getTrelloView());
  trellopane.onDidDestroy(dispose);

  controller.updateTrelloBoards(TC.getBoards());


  function dispose(){
    trellosubscription.dispose();
    trellosubscription = null;
    trellopane.destroy();
  }
}
