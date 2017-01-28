/**
 * Created by johnbecker on 2016-09-17.
 * Controller Class acts as a go between the model, view, and the main js.
 * TODO: This class is probably unnecessary and can be refactored out of this package.
 */
'use babel';

class Controller{
  constructor(modalPanel, rightPanel, markdownPanel, markdownPreviewView){
    this.modalPanel = modalPanel;
    this.rightPanel = rightPanel;
    this.markdownPanel = markdownPanel;
    this.markdownPreviewView = markdownPreviewView;
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

}

//important to export or else NodeJS can't pick it up
module.exports = Controller;
