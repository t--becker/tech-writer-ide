'use babel';
//strips '-' from a string
export default function (elm) {
  let regex = /-/g;
    return elm.replace(regex, '');
}
