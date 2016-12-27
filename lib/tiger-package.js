'use babel';

import TigerPackageView from './views/tiger-package-view';
import RightPanelView from './views/right-panel-view';
import MarkDownValidatorView from './views/markdown-validator-view';
import { CompositeDisposable } from 'atom';
//Controller  with JQuery
Controller = require('./controller.js');
//Router to retrieve data
ComicRouter = require('./routers/comic-router.js');
//panel button functions
PanelFunction = require('./panel-functions.js');
//
MarkdownValidatorModel = require('./models/validator-model.js');

export default {

  tigerPackageView: null,
  modalPanel: null,
  subscriptions: null,
  rightPanelView: null,
  rightPanel: null,
  markdownPanel: null,
  markdownValidatorView: null,


  activate(state) {
    //instantiate the panel functions
    var panelFunction = new PanelFunction();

/*
############################################################################
# Creates the Views
############################################################################
*/
    this.markdownValidatorView = new MarkDownValidatorView(state.MarkDownValidatorViewState);
    this.markdownPanel = atom.workspace.addBottomPanel({
      item: this.markdownValidatorView.getElement(),
      visible: false,
      className: 'bottom-panel'
    });

    this.tigerPackageView = new TigerPackageView(state.tigerPackageViewState);
    this.modalPanel = atom.workspace.addTopPanel({
      item: this.tigerPackageView.getElement(),
      visible: false,
      className: 'top-panel'
    });

    this.rightPanelView = new RightPanelView(state.RightPanelViewState);
    this.rightPanel = atom.workspace.addRightPanel({
      item: this.rightPanelView.getElement(),
      visible: false,
      className: 'right-panel'
    });

    //load the controller with the panels
    controller = new Controller(this.modalPanel, this.rightPanel, this.markdownPanel);

/*
############################################################################
# Register Event Handlers
############################################################################
*/
    this.subscriptions = new CompositeDisposable();
    //retrieves from marvel comics api and populates the right panel with the data
    this.subscriptions.add(this.rightPanel.onDidChangeVisible((visible) =>{
      if(visible){
      comicRouter = new ComicRouter();
      comicRouter.getComic().then((response) => {
        console.log("Success!", response);
        this.rightPanelView.showComic(response);
        }, function(error) {
        console.log("Failed!", error);
      })
    }
    }));

    //sets the listener callback for the mardownPanel visibility changes
    this.subscriptions.add(this.markdownPanel.onDidChangeVisible((visible) =>{
      if(visible){
        if(panelFunction.isMarkdown()){
        //create a markdown class
        let markdownModel = new MarkdownValidatorModel(panelFunction.validateMarkdown());
        this.markdownValidatorView.updateView(markdownModel.toString());
      }
      else{
        //clear view the markdown-validator panel view
        this.markdownValidatorView.clearView();
      }
    }
    }));

    //sets the listner callback for the modePanel's visibility changes
    this.subscriptions.add(this.modalPanel.onDidChangeVisible((visible) =>{
      if(!visible){
        this.rightPanel.hide();
      }
    }));

    // sets the listener callback for the text editor's stop changing event butter
    this.subscriptions.add(atom.workspace.observeTextEditors((editor)=>{
      editor.onDidStopChanging((editor) =>{
        if(this.markdownPanel.visible && panelFunction.isMarkdown()){
          let markdownModel = new MarkdownValidatorModel(panelFunction.validateMarkdown());
          this.markdownValidatorView.updateView(markdownModel.toString());
        }
      })
    }));

/*
############################################################################
# Register Atom-Workspace Commands Menu Commands
############################################################################
*/
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tiger-package:toggle': () => this.toggle()
    }));

  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rightPanel.destroy();
    this.tigerPackageView.destroy();
  },

  serialize() {
    return {
      tigerPackageViewState: this.tigerPackageView.serialize()
    };
  },

  toggle() {
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
