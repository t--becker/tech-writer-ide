'use babel';
/**
 * Created by johnbecker on 2016-09-17.
 * This class takes the mardown validator errors supplied by markdownlint(https://www.npmjs.com/package/markdownlint)
 * and formats them into a DOM span element.
 */

class MarkdownValidatorModel{
  constructor(result){
    this.result = result.content;
  }

  /*
  Creates an DOM element with a @tag, @id, @classname, and a @description
  which will add a text node to the element. If arguments aren't passed
  to function, they won't be added to the DOM element.
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

  /*
  Builds and returns a DOM representation of the validator model.
  */
  toString(){
    //could be easier with Jquery, but jQuery is acting whacky here
    //and I can't be bothered with it
    let span = this._createElement('span', 'markdown-error-panel-span', 'validation-error');
    let ul = this._createElement('ul', 'markdown-error-panel-ul', 'markdown-errors');
    span.appendChild(ul);

    this.result.forEach((arrayItem)=>{
      let li = this._createElement('li', false, 'item');
      li.appendChild(this._createElement('span', false, 'description', arrayItem.ruleDescription));
      li.appendChild(this._createElement('span', false, 'number', arrayItem.lineNumber));
      ul.appendChild(li);

    });

    return span;
  }
}

//important to export or else NodeJS can't pick it up
module.exports = MarkdownValidatorModel;
