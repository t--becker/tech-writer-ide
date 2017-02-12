'use babel';
var Client = require('node-rest-client').Client;

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


  getMeBoards(){
    return new Promise((resolve, reject) => {
    this.client.get(this.endpoint+
      'member/me/boards?' +
      'key='+ this.API_KEY +"&"+
      'token=' + this.TOKEN,

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

  getCardsOnList(){}


}
module.exports = TrelloClient;
