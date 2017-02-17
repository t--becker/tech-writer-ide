'use babel';
var Client = require('node-rest-client').Client;

class TrelloClient{

  constructor(key, token)
  {
    this.API_KEY = '6ff4dcd8c4ab363c52278f4d8a6b0144'
    this.TOKEN = '2601b788f269879e890365b678a505e3aa3fe4385207c7357faa9f279b00476d';
    this.endpoint = 'https://api.trello.com/1/';
    this.me = 'member/me/boards';
    this.board = 'boards/';
    this.cards = 'cards=all';
    this.lists = 'lists=all';
    this.key = 'key='+ this.API_KEY;
    this.token = 'token='+ this.TOKEN;
    this.client = new Client();

  }

  addCard(){}

  updatedCard(){}

  getCart(){}

  getList(){}

  //gets a single board with lists and cards
  //https://trello.com/1/boards/589e5011f825b40acdd1f8a6?cards=all&lists=all&key=111111&token=111111
  getBoardWithCardsAndLists(boardID){
    return new Promise((resolve, reject) => {
    this.client.get(this.endpoint+
      this.board+boardID +"?"+
      this.cards + '&' +
      this.lists + '&' +
      this.key + '&' +
      this.token,

      function(data, response) {
          //var comic = new Comic(data);
          console.log("response", response);
          if(response.statusCode == 200){
          resolve(data);
          }
          else{
            reject(Error(response.statusText));
          }

          });
      });

  }

  getMeBoards(){
    return new Promise((resolve, reject) => {
    this.client.get(this.endpoint+
      this.me +"?"+
      this.key +"&"+
      this.token,

      function(data, response) {
          console.log("response", response);
          if(response.statusCode == 200){
          resolve(data);
          }
          else{
            reject(Error(response.statusText));
          }

          });
      });
  }

  getCardsOnList(){}


}
module.exports = TrelloClient;
