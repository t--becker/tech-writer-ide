/**
 * Created by johnbecker on 2016-09-17.
 * Controller Class acts as a go between the model, view, and the main js.
 * TODO: There has got to be a better way than using this class like this! But what???
 */
'use babel';

List = require('./models/trello-list.js');
Card = require('./models/trello-card.js')

class Controller{
  constructor(modalPanel, rightPanel, markdownPanel, markdownPreviewView, trelloView, techWriterIDEView){
    this.modalPanel = modalPanel;
    this.rightPanel = rightPanel;
    this.markdownPanel = markdownPanel;
    this.markdownPreviewView = markdownPreviewView;
    this.trelloView = trelloView;
    this.techWriterIDEView = techWriterIDEView;
  }

  close(){
    this.modalPanel.hide();
  }

  //toggles the icon color
  toggleIcon(icon){
    this.techWriterIDEView.toggleIcon(icon);
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
    if(this.markdownPanel.isVisible()){
        this.markdownPanel.hide();
        this.techWriterIDEView.toggleIcon('check-circle');
    }
    else{
        this.markdownPanel.show();
        this.techWriterIDEView.toggleIcon('check-circle');
    }

  }

  toggleMarkdownPreviewVisibility(){
    this.markdownPreviewView.toggleVisibility();
  }

  getMarkdownPreviewVisibility(){
    return this.markdownPreviewView.getVisible();
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
          controller._updateTrelloLists(response);
         }, function(error) {
          console.log("Failed!", error);
        })
  }

  _updateTrelloLists(response){
    let lists = response['lists'];
    let cards = response['cards'];
    let listsMap = new Map();
    for(let l of lists){
      let list = new List(l);
      listsMap.set(list.getID(), list);
    }
    console.log(listsMap);
    for(let c of cards){
      let card = new Card(c);
      let list = listsMap.get(card.getListID());
      list.setCards(card);
    }

    this.trelloView.updateLists(listsMap);
  }

}

//important to export or else NodeJS can't pick it up
module.exports = Controller;
