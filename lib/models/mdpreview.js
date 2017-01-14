'use babel';
var marked = require('marked');

class MDPreview{
  constructor(text){
    this.text = text;
    this.regex = /{{%\s*(note|tip|warning)\s*%}}((.|\n)*?){{%\s*\/(note|tip|warning)\s*%}}/ig;
  }

  _updateNotes(){
    return this.text.replace(this.regex, this._reformNote)
  }

  _reformNote(note, tag, message){
    return `<div class="aui-message ${tag}">
      <div class="icon"></div>
        <p class="title">
          <strong>Note</strong>
          </p>
          <p>
            ${message}
            </p>
    </div>`;
  }

  _readInclude(){
    /*
    {{< include path="/Users/johnbecker/repository/tiger-package/lib/controller.md">}}
    */
  }

  toString(){
    return marked(this._updateNotes());
  }
}


module.exports = MDPreview;
