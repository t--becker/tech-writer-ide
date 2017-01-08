'use babel';
var markdown = require( "markdown" ).markdown;

export default function(editor) {
    //controller.openRightPanel();
    //var page = editor.getText();
    //var title = editor.getTitle();
    //iterate through and find the special atlas tags and
    //convert them into the appropriate thing

    //controller.update(markdown.toHTML(editor.getText()));
    //console.log(markdown.toHTML(editor.getText()));
    var pane = atom.workspace.getActivePane().splitRight();
    console.log(pane);
}
