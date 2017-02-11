'use babel';
TrelloClient = require('../client/trello-router.js');
TrelloBoard = require('../models/trello-board.js');
import { CompositeDisposable } from 'atom';

export default function(editor){

  let TC = new TrelloClient('key', 'token');

  var trellosubscription = new CompositeDisposable();
  var trellopane = atom.workspace.getActivePane().splitRight();
  trellopane.addItem(controller.getTrelloView());
  trellopane.onDidDestroy(dispose);

//GET THE BOARDS
  TC.getMeBoards().then((response) => {
      console.log("Success!", response);

      var trelloBoard = new TrelloBoard(response);
      controller.updateTrelloBoards(trelloBoard.getBoards());

       }, function(error) {
        console.log("Failed!", error);
      })

  function dispose(){
    trellosubscription.dispose();
    trellosubscription = null;
    trellopane.destroy();
  }
}
