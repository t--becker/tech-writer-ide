'use babel';
/**
 * Created by johnbecker on 2016-09-17.
 */

class MarkdownValidatorModel{
  constructor(result){
    this.result = result.content;
  }

  toString(){
    //create the markdown error div elements
    //could be easier with Jquery, but it's acting whacky here
    //and I can't be bothered with it
    let div = document.createElement('div');
    div.id='markdown-error-panel-div';
    let span = document.createElement('span');
    span.classList.add('validation-error');
    span.id = 'markdown-error-panel-span';
    let ul = document.createElement('ul');
    ul.classList.add('markdown-errors');

    div.appendChild(span);
    span.appendChild(ul);

    this.result.forEach( function (arrayItem)
    {
      let li = document.createElement('li');
      li.classList.add('item');

      let span = document.createElement('span');
      span.classList.add('number');
      let litext = document.createTextNode(arrayItem.lineNumber);

      let span2 = document.createElement('span');
      span2.classList.add('description');
      let li2text = document.createTextNode(arrayItem.ruleDescription);

      span.appendChild(litext);
      li.appendChild(span);
      span2.appendChild(li2text);
      li.appendChild(span2);

      ul.appendChild(li);

    });

    return div;
  }

}

//important to export or else NodeJS can't pick it up
module.exports = MarkdownValidatorModel;
