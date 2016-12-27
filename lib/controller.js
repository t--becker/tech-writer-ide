/**
 * Created by johnbecker on 2016-09-17.
 * Controller Class acts as a go between the model, view, and the main js.
 * TODO: This class is probably unnecessary and can be refactored out of this package.
 */
'use babel';
var $ = require('jquery');

class Controller{
  constructor(modalPanel, rightPanel, markdownPanel){
    this.modalPanel = modalPanel;
    this.rightPanel = rightPanel;
    this.markdownPanel = markdownPanel;
  }

  close(){
    this.modalPanel.hide();
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

}

//important to export or else NodeJS can't pick it up
module.exports = Controller;
