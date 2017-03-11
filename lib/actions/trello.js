'use babel';
TrelloBoard = require('../models/trello-boards.js');
import { CompositeDisposable } from 'atom';

export default function(editor){


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