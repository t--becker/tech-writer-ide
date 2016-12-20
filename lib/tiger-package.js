'use babel';

import TigerPackageView from './tiger-package-view';
import RightPanelView from './right-panel-view';
import { CompositeDisposable } from 'atom';
//Controller  with JQuery
Controller = require('./controller.js');
//Router to retrieve data
ComicRouter = require('./routers/comic-router.js');
//panel button functions
PanelFunction = require('./panel-functions.js');

export default {

  tigerPackageView: null,
  modalPanel: null,
  subscriptions: null,
  rightPanelView: null,
  rightPanel: null,


  activate(state) {
    //instantiate the panel functions
    panelFunction = new PanelFunction();

    this.tigerPackageView = new TigerPackageView(state.tigerPackageViewState);
    this.modalPanel = atom.workspace.addTopPanel({
      item: this.tigerPackageView.getElement(),
      visible: false,
      className: 'top-panel'
    });

    //instantiate the right panel view
    this.rightPanelView = new RightPanelView(state.RightPanelViewState);
    this.rightPanel = atom.workspace.addRightPanel({
      item: this.rightPanelView.getElement(),
      visible: false,
      className: 'right-panel'
    });

    //load the controller with the modalPanel and rightPanel
    controller = new Controller(this.modalPanel, this.rightPanel);
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
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


    this.subscriptions.add(this.modalPanel.onDidChangeVisible((visible) =>{
      if(!visible){
        this.rightPanel.hide();
      }
    }));

    // Register command that toggles the views
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
    console.log('TigerPackage was toggled!');

    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
