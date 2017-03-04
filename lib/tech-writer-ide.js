'use babel';

import TechWriterIDEView from './views/tech-writer-ide-view';
import RightPanelView from './views/right-panel-view';
import MarkDownValidatorView from './views/markdown-validator-view';
import MarkdownPreviewView from './views/markdown-preview-view';
import { CompositeDisposable } from 'atom';
import actions from './actions';
import validator from './utils/validate-markdown';

Controller = require('./controller.js');
//Router to retrieve data
//ComicRouter = require('./routers/comic-router.js');

FileFunctions = require('./utils/file-functions.js');
MarkdownValidatorModel = require('./models/validator-model.js');

export default {

  techWriterIDEView: null,
  modalPanel: null,
  subscriptions: null,
  rightPanelView: null,
  rightPanel: null,
  markdownPanel: null,
  markdownValidatorView: null,
  markdownPreviewView: null,


  activate(state) {

    atom.commands.add('atom-workspace', {
      'tech-writer-ide:toggle': () => this.toggle()
    });
/*
############################################################################
# Build the helper classes
############################################################################
*/
    fileFunctions = new FileFunctions();
/*
############################################################################
# Creates the Views
############################################################################
*/
    this.markdownPreviewView = new MarkdownPreviewView(state.MarkdownPreviewViewState);

    this.markdownValidatorView = new MarkDownValidatorView(state.MarkDownValidatorViewState);
    this.markdownPanel = atom.workspace.addBottomPanel({
      item: this.markdownValidatorView.getElement(),
      visible: false,
      className: 'bottom-panel'
    });

    this.techWriterIDEView = new TechWriterIDEView(state.techWriterIDEViewState);
    this.modalPanel = atom.workspace.addTopPanel({
      item: this.techWriterIDEView.getElement(),
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
    controller = new Controller(this.modalPanel, this.rightPanel, this.markdownPanel, this.markdownPreviewView, this.techWriterIDEView);

/*
############################################################################
# Register Event Handlers
###########################################################################
*/
    //create the subscriptions class
    this.subscriptions = new CompositeDisposable();

    //markdownPanel visibility change callback:
    //@visible -> sets the markdownPanel's title and markdown validator data
    //@!visible -> clears the markdownPanel's view.
    this.subscriptions.add(this.markdownPanel.onDidChangeVisible((visible) =>{
      if(visible){

        if(fileFunctions.isMarkdown()){
          this.markdownValidatorView.setTitle(fileFunctions.getCurrentTitle());
          let markdownModel = new MarkdownValidatorModel(validator());
          this.markdownValidatorView.updateView(markdownModel.toString());
        }
        else{
          this.markdownValidatorView.setTitle(fileFunctions.getCurrentTitle());
          this.markdownValidatorView.setInvalidMarkdownWarning();        }
      }
      else{
        //clear view the markdown-validator panel view
        this.markdownValidatorView.clearView();
      }
    }));

    //modePanel visibility change callback:
    //@!visible -> hides the right panel
    this.subscriptions.add(this.modalPanel.onDidChangeVisible((visible) =>{
      if(!visible){
        this.rightPanel.hide();
      }
    }));

    //Text editor on-stop change listener callback:
    //@visible && markdown -> set markdown panel title and display markdown errors
    //in panel
    //@visible && !markdown -> set the markdown panel's title and clear view
    this.subscriptions.add(atom.workspace.observeTextEditors((editor)=>{

      this.subscriptions.add(editor.onDidStopChanging((editor) =>{
        if(this.markdownPanel.visible){
          if(fileFunctions.isMarkdown()){
            this.markdownValidatorView.setTitle(fileFunctions.getCurrentTitle());
            this.markdownValidatorView.clearView();
            let markdownModel = new MarkdownValidatorModel(validator());
            this.markdownValidatorView.updateView(markdownModel.toString());
          }
          else{
            this.markdownValidatorView.setTitle(fileFunctions.getCurrentTitle());
            this.markdownValidatorView.clearView();
            this.markdownValidatorView.setInvalidMarkdownWarning();
          }
        }
      }))
    }));


    //On change panel listner callback:
    //@visible && markdown -> sets the markdown panel title and displays markdown errors
    //in panel
    //@visibe && !markdown -> sets the markdown panel title and clears the view
    this.subscriptions.add(atom.workspace.onDidChangeActivePaneItem((editor)=>{
      if(this.markdownPanel.visible){
        if(fileFunctions.isMarkdown()){
          this.markdownValidatorView.setTitle(fileFunctions.getCurrentTitle());
          this.markdownValidatorView.clearView();
          let markdownModel = new MarkdownValidatorModel(validator());
          this.markdownValidatorView.updateView(markdownModel.toString());
        }
        else{
          this.markdownValidatorView.setTitle(fileFunctions.getCurrentTitle());
          this.markdownValidatorView.clearView();
          this.markdownValidatorView.setInvalidMarkdownWarning();
        }
      }
    }));
/*
############################################################################
# Register Atom-Workspace Commands Menu Commands
############################################################################
*/


  },

  deactivate() {
      this.subscriptions.dispose();
      this.modalPanel.dispose();
    },

  serialize() {
    return {
      techWriterIDEViewState: this.techWriterIDEView.serialize()
    };
  },

  toggle() {
    if(this.modalPanel.isVisible()){
      return this.modalPanel.hide();
    }
    else{
      return this.modalPanel.show();
    }
  }

};
