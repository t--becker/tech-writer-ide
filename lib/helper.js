/**
 * Created by johnbecker on 2016-09-17.
 */
'use strict';
var $ = require('jquery');

function Helper(modalPanel){
    this.modalPanel = modalPanel;

}

Helper.prototype ={
    constructor: Helper,

    /*
    Returns an href to the file
     */
    tiger: function(){
        console.log(this.modalPanel);
        this.modalPanel.hide();
      },

      hide: function(){
        $(".tiger-package").addClass("hide");
      }
};


//important to export or else NodeJS can't pick it up
module.exports = Helper;
