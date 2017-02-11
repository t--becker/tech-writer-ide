'use babel';
var JSONPath = require('jsonpath-plus');


class TrelloBOARD{

  constructor(JSON){
    this.JSON = JSON;
    this._getValue = function(jsonPath) {
        return JSONPath({ json: this.JSON, path: jsonPath }).toString();
    }
  }

  _getBoardTitles(){
    return this._getValue('$..name');
  }

  getBoards(){
    let titles = this._getBoardTitles().split(',');
    var titlesArr = new Array();
    for(let title of titles){
      titlesArr.push(this._getBoardButtons(title));
    }
    return titlesArr.join("");
  }

  _getBoardButtons(title){
    return `<button class="btn trello" type="button">${title}</button>`
  }

}
module.exports = TrelloBOARD;
