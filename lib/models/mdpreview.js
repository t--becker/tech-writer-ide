'use babel';
const marked = require('marked');
const fs = require('fs');
const path = require('path');
import headstrip from '../utils/strip-header';

/*
  Previewer receives the text of the active panel, then process the shit out of it.
*/
class MDPreview{
  constructor(text, filePath){
    this.text = text;
    this.filepath = filePath;
    this.noteregex = /{{%\s*(?:note|tip|warning)\s*((?:title="(\w+(?: +\w+\s*)*)")|( ))\s*%}}((?:.|\n)*?){{%\s*\/(note|tip|warning)\s*%}}/ig;
    this.includeregex = /{{<\s*include\s*path="(\S+)"\s*>}}/ig;
    this.navheader = `<nav class="navbar navbar-default"><span class="logo"></span></nav>\n`;
    this.linkregex = /(!\[[^\]]+\])\(([^)]+)\)/ig;
  }

  _setMetaData(){
    this.text = headstrip(this.text);
  }
  _setNavHeader(){
    this.text = this.navheader + this.text;
  }

  _updateNotes(){
    this.text = this.text.replace(this.noteregex, this._reformNote);
  }

  _reformNote(note, tiper, title, title2, message, tag){

    if(typeof title=='undefined'|title==""){
      title = tag;
    }
    return `<div class="aui-message ${tag}">
      <div class="icon"></div>
        <p class="title">
          <strong>${title}</strong>
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
          return `<div class='include-error'><p class='title'><strong>ERROR</strong></p><p>The include file path is invalid.</p></div>`;
        }
    }));
  }


  toString(){
    this._setMetaData();
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

    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });

    return marked(this.text);
  }
}

module.exports = MDPreview;
