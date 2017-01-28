'use babel'
//strips out the MD metadata
export default function (body){
  let regex = /---((.|\n)*?)---/ig;
  return body.replace(regex, '');
}
