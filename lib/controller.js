/**
 * Created by johnbecker on 2016-09-17.
 */
'use babel';
var $ = require('jquery');

class Controller{
  constructor(modalPanel, rightPanel){
    this.modalPanel = modalPanel;
    this.rightPanel = rightPanel;
  }

  close(){
    console.log(this.modalPanel);
    this.modalPanel.hide();
  }

  openRightPanel(){
    this.rightPanel.isVisible() ?
    this.rightPanel.hide() :
    this.rightPanel.show()
  }

  alerting(){
    alert('fucking hell');
  }


  alertingAgain(visible){
    alert('fucking helssssl');
  }

}

//important to export or else NodeJS can't pick it up
module.exports = Controller;
