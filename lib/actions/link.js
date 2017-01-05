'use babel';

export default function(editor) {
    const selection = editor.getSelectedText();
    let regex = /<a href="(.)*">[a-zA-Z|\s]*<\/a>/ig;

    if(selection.search(regex) != -1){
      selection.replace(regex, replacer);
    }
    else{

    }

    function replacer(elm){
      let linkRegex = /"([a-zA-Z\S]*)"/ig;
      let textRegex = />(.*?)</ig;
      //let link = elm
      let tipper = elm.match(textRegex);
      console.log(tipper.slice(1, -1));

    }

}


/*

[link-title](http://)

[link-title] ([link-title] (<a href="http://www.w3schools.com/html/">Visit our HTML tutorial</a>))

Types of [link-title] ([link-title] (hyperlinkslinks))
Direct
http(s)://www.yahoo.com/tiger.html
Relative
http(s)://www.yahoo.com/tiger

MD
../context-parameters/#inline-[link-title] (conditions)
[link-title] (#/boolean-operations)



<a href="(.)*">.*<\/a>

asd fasdfasd fas
<a href="http://www.w3schools.com/html/">Visit our HTML tutorial</a> <a > asdlfmaslkdfmasldf



<a href="http://www.democompany.com/document#jump">Remote jump within



document</a>

qwerqwer


<a href="http://www.w3schools.com/html/">Visit our HTML tutorial</a>
*/
