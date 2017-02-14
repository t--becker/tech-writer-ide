/**
 * Created by johnbecker on 2016-09-17.
 * Controller Class acts as a go between the model, view, and the main js.
 * TODO: There has got to be a better way than using this class like this! But what???
 */
'use babel';

TrelloLists = require('./models/trello-lists.js');

class Controller{
  constructor(modalPanel, rightPanel, markdownPanel, markdownPreviewView, trelloView){
    this.modalPanel = modalPanel;
    this.rightPanel = rightPanel;
    this.markdownPanel = markdownPanel;
    this.markdownPreviewView = markdownPreviewView;
    this.trelloView = trelloView;
  }

  close(){
    this.modalPanel.hide();
  }

  updateMDPreview(html){
    this.markdownPreviewView.update(html);
  }

  openRightPanel(){
    this.rightPanel.isVisible() ?
    this.rightPanel.hide() :
    this.rightPanel.show()
  }

  openMarkdownPanel(){
    this.markdownPanel.isVisible() ?
    this.markdownPanel.hide() :
    this.markdownPanel.show()
  }

  getMarkdownPreview(){
    return this.markdownPreviewView;
  }

  getTrelloView(){
    return this.trelloView;
  }

  updateTrelloBoards(board){
    this.trelloView.updateBoards(board);
  }

  getTrelloLists(board){

    TC.getBoardWithCardsAndLists(board).then((response) => {
        console.log("Success!", response);

        var trelloLists = new TrelloLists(response);
        //controller.updateTrelloBoards(trelloBoard.getBoards());

         }, function(error) {
          console.log("Failed!", error);
        })
  }

  _updateTrelloLists(lists){

  }

  hello(ll){
    alert(ll);
  }

}

//important to export or else NodeJS can't pick it up
module.exports = Controller;
