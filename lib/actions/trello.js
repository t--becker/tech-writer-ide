'use babel';
TrelloClient = require('../client/trello-router.js');
import { CompositeDisposable } from 'atom';

export default function(editor){

  let TC = new TrelloClient('key', 'token');

  var trellosubscription = new CompositeDisposable();
  var trellopane = atom.workspace.getActivePane().splitRight();
  trellopane.addItem(controller.getTrelloView());
  trellopane.onDidDestroy(dispose);

  TC.getBoards().then((response) => {
    console.log("Success!", response);

       controller.updateTrelloBoards(response);

       }, function(error) {
        console.log("Failed!", error);
      })


  function dispose(){
    trellosubscription.dispose();
    trellosubscription = null;
    trellopane.destroy();
  }
}
