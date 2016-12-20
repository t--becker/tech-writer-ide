'use babel';
var Client = require('node-rest-client').Client;
var md5 = require('js-md5');
var Comic = require('../models/comic-model');
var JSONPath = require('jsonpath-plus');


class ComicRouter{
  constructor(){
    this.API_KEY = 'dfbe41fdee8347085f67bde199d38b11';
    this.PRIV_KEY = 'c3fe216dd015744052410003745b686fc24e1f3a';
    this.endpoint = 'http://gateway.marvel.com:80/v1/public/comics/';
    //a list of the IDs for the comics I love
    this.comicIDList = ['7745?', '17887?', '13809?', '8602?', '12682?'];
    this.client = new Client();
    //marvel GET request requires: date + hash(time + PRIV_KEY + API_KEY) + API_KEY
    this.ts = new Date().getTime();
    this.hash = md5(this.ts + this.PRIV_KEY + this.API_KEY);
  }

  getComic(){
    return new Promise(function(resolve, reject) {

    var API_KEY = 'dfbe41fdee8347085f67bde199d38b11';
    var PRIV_KEY = 'c3fe216dd015744052410003745b686fc24e1f3a';
    var endpoint = 'http://gateway.marvel.com:80/v1/public/comics/';
    //a list of the IDs for the comics I love
    var comicIDList = ['7745?', '17887?', '13809?', '8602?', '12682?'];
    var client = new Client();
    //marvel GET request requires: date + hash(time + PRIV_KEY + API_KEY) + API_KEY
    var ts = new Date().getTime();
    var hash = md5(ts + PRIV_KEY + API_KEY);

    client.get(endpoint + comicIDList[0] +
      '&ts=' + ts +
      '&hash=' + hash +
      '&apikey=' + API_KEY,

      function(data, response) {
          //var comic = new Comic(data);
          console.log("response", response);
          if(response.statusCode == 200){
          console.log("getComic", data.copyright);
          resolve(data.copyright);
          }
          else{
            reject(Error(response.statusText));
          }
          });

        });

  }

}

module.exports = ComicRouter;
