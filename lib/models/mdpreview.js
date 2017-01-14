'use babel';
var marked = require('marked');
var fs = require('fs');

/*
  Previewer receives the text of the active panel.
*/
class MDPreview{
  constructor(text){
    this.text = text;
    this.noteregex = /{{%\s*(note|tip|warning)\s*%}}((.|\n)*?){{%\s*\/(note|tip|warning)\s*%}}/ig;
    this.includeregex = /{{<\s*include\s*path="(\S+)"\s*>}}/ig;
  }

  _updateNotes(){
    this.text = this.text.replace(this.noteregex, this._reformNote);
  }

  _reformNote(note, tag, message){
    return `<div class="aui-message ${tag}">
      <div class="icon"></div>
        <p class="title">
          <strong>${tag}</strong>
          </p>
          <p>${message}</p>
    </div>`;
  }

  _updateIncludes(){
    this.text = this.text.replace(this.includeregex, this._readInIncludeFiles);
  }

  _readInIncludeFiles(include, path){
    try {
      return fs.readFileSync(path, 'utf8');
      } catch (err) {
        return `<span><strong>ERROR</strong>The include file is invalid.</span>`;
      }
  }

  toString(){
    //checks if note,tips,warning exist
    if(this.noteregex.test(this.text)){
      this._updateNotes();
    }
    //checks if includes exist
    if(this.includeregex.test(this.text))
    {
      this._updateIncludes();
    }
    return marked(this.text);
  }
}

module.exports = MDPreview;
