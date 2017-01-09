'use babel';
var markdown = require( "markdown" ).markdown;

export default function(editor) {
    //TODO:
          //check that the file is markdown before rendering
          //register updating view with buffer Updates
          //iterate through and find the special atlas tags and
          //convert them into the appropriate thing

    var pane = atom.workspace.getActivePane().splitRight();
    pane.addItem(controller.getRightPanelView());
    controller.update(markdown.toHTML(editor.getText()));
    
}
