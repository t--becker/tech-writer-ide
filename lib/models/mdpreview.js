'use babel';
var marked = require('marked');
var fs = require('fs');
const path = require('path');
/*
  Previewer receives the text of the active panel.
*/
class MDPreview{
  constructor(text, filePath){
    this.text = text;
    this.filepath = filePath;
    this.noteregex = /{{%\s*(note|tip|warning)\s*%}}((.|\n)*?){{%\s*\/(note|tip|warning)\s*%}}/ig;
    this.includeregex = /{{<\s*include\s*path="(\S+)"\s*>}}/ig;
    this.navheader = `<nav class="navbar navbar-default"><span class="logo"></span></nav>\n`;
    this.linkregex = /(!\[[^\]]+\])\(([^)]+)\)/ig;
  }

  _setNavHeader(){
    this.text = this.navheader + this.text;
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

  _setImageBasePaths(){
    this.text = this.text.replace(this.linkregex, (($1,$2,$3)=>{

      return $2 + '(' + path.resolve(path.dirname(this.filepath), $3) + ')';

    }));
  }

  _updateIncludes(){
    this.text = this.text.replace(this.includeregex, (($1,$2)=>{
      try {

        return fs.readFileSync(path.resolve(path.dirname(this.filepath), $2), 'utf8');
        } catch (err) {
          return `<span><strong>ERROR</strong><p>The include file is invalid.</p></span>`;
        }

    }));
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
    //
    if(this.linkregex.test(this.text)){
      this._setImageBasePaths();
    }

    this._setNavHeader();
    return marked(this.text);
  }
}

module.exports = MDPreview;
