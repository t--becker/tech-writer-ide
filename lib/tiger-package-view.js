'use babel';
var $ = require('jquery');

export default class TigerPackageView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('tiger-package');
    this.element.id = 'tiger-package';

    // Create message element
    btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = function(){helper.tiger()};
    btnlabel = document.createTextNode('CLICK ME');
    btn.appendChild(btnlabel);

    const message = document.createElement('div');
    message.textContent = 'The TigerPackage package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
    this.element.appendChild(btn);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  insertTextElement(){
      $("#tiger-package").append("some appended text");
  }

}
