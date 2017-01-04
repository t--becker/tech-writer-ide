'use babel';

export default function (url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
