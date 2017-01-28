'use babel'
//strips out the MD metadata
export default function (body){
  let regex = /^---$[^]*?^---$(\r\n|\r|\n)/ig;
  return body.replace(regex, '');
}
