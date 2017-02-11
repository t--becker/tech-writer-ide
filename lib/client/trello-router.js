'use babel';
var Client = require('node-rest-client').Client;
var JSONPath = require('jsonpath-plus');


class TrelloClient{

  constructor(key, token)
  {
    
    this.endpoint = 'https://api.trello.com/1/';
    this.client = new Client();

  }

  addCard(){}

  updatedCard(){}

  getCart(){}

  getList(){}

  getBoards(){
    this.client.get(this.endpoint+
      'member/me/boards?' +
      'key='+ this.API_KEY +"&"+
      'token=' + this.TOKEN,

      function(data, response) {
        console.log("response", response);
        console.log("data", data);
        return data;
          });
  }

  getCardsOnList(){}


}
module.exports = TrelloClient;
