'use babel';
/**
 * Created by johnbecker on 2016-09-17.
 */

class MarkdownValidatorModel{
  constructor(result){
    this.result = result.content;
  }

  /*
  */
  _createElement(tag, id, className, description){
    let element = document.createElement(tag);

    if(id){
      element.id = id;
    }
    if(className){
      element.classList.add(className);
    }
    if(description){
      element.appendChild(document.createTextNode(description));
    }

    return element;
  }

  toString(){
    //create the markdown error div elements
    //could be easier with Jquery, but it's acting whacky here
    //and I can't be bothered with it
    let div = this._createElement('div', 'mardown-error-panel-div');
    let span = this._createElement('span', 'markdown-error-panel-span', 'validation-error');
    let ul = this._createElement('ul', 'markdown-error-panel-ul', 'markdown-errors');

    div.appendChild(span);
    span.appendChild(ul);


    this.result.forEach((arrayItem)=>{
      let li = this._createElement('li', false, 'item');
      li.appendChild(this._createElement('span', false, 'number', arrayItem.lineNumber)).
      appendChild(this._createElement('span', false, 'description', arrayItem.ruleDescription));

      ul.appendChild(li);

    });

    return div;
  }

}

//important to export or else NodeJS can't pick it up
module.exports = MarkdownValidatorModel;
