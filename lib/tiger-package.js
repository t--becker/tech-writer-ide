'use babel';

import TigerPackageView from './tiger-package-view';
import RightPanelView from './right-panel-view';
import { CompositeDisposable } from 'atom';
//Helper class with JQuery
Helper = require('./helper.js');
ComicRouter = require('./routers/comic-router.js');

export default {

  tigerPackageView: null,
  modalPanel: null,
  subscriptions: null,
  rightPanelView: null,
  rightPanel: null,


  activate(state) {
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


    //load the helper class with the modalPanel and right panel
    helper = new Helper(this.modalPanel, this.rightPanel);
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    /*
    this.subscriptions.add(this.rightPanelView.onDidChangeVisible((visible) =>{
      this.onDidChangeVisible();
    }));
*/
    //this.subscriptions.add(this.rightPanelView.onDidChangeVisible);

    //this.subscriptions.add(this.rightPanel.onDidChangeVisible=function(visible) {alert('i am visible')});
  //subscription = editor.onDidChangeScrollLeft(function(scrollLeft) {});

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tiger-package:toggle': () => this.toggle(),
      'tiger-package:convert': () => this.convert()
    }));

  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rightPanelView.dispose();
    this.rightPanelView.destroy();
    this.tigerPackageView.destroy();
  },

  onDidChangeVisible (callback) {
      return this.emitter.on('did-change', callback)
    },

  serialize() {
    return {
      tigerPackageViewState: this.tigerPackageView.serialize()
    };
  },


  visible(){
      console.log('MyPackage is invisible');
      this.modalPanel.visible = false;
    },

  convert(){
      console.log('converting');
      var editor = atom.workspace.getActiveTextEditor();
      if(editor)
      {
        //inserts text into the active editor at the cursor.
        //editor.insertText("Fuck me");
        //calls a method on the view
        this.tigerPackageView.insertTextElement();
      }
  },

  toggle() {
    console.log('TigerPackage was toggled!');
    this.rightPanel.show();

    comicRouter = new ComicRouter();
    
    comicRouter.getComic().then((response) => {
      console.log("Success!", response);

      this.rightPanelView.showComic(response);
      
      }, function(error) {
      console.log("Failed!", error);
    })
    
    return (

      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
