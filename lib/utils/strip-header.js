'use babel'

export default function (body){
  let regex = /---((.|\n)*?)---/ig;
  return body.replace(regex, '');
}
