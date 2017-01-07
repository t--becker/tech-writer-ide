'use babel';

export default function (elm) {
  let regex = /-/g;
    return elm.replace(regex, '');
}
