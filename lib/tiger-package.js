'use babel';

import TigerPackageView from './tiger-package-view';
import { CompositeDisposable } from 'atom';
//Helper class with JQuery
Helper = require('./helper.js');

export default {

  tigerPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.tigerPackageView = new TigerPackageView(state.tigerPackageViewState);
    this.modalPanel = atom.workspace.addTopPanel({
      item: this.tigerPackageView.getElement(),
      visible: false
    });
    //load the helper class with the modalPanel
    helper = new Helper(this.modalPanel);
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tiger-package:toggle': () => this.toggle(),
      'tiger-package:convert': () => this.convert()
    }));

  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.tigerPackageView.destroy();
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
    //helper.tiger(this.modelPanel);
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
