'use babel';
var markdown = require( "markdown" ).markdown;

class MDPreview{
  constructor(text){
    this.text = text;
    this.HTMLtree = markdown.toHTMLTree(markdown.parse( this.text ));

    /*
    {{% note %}}Take note of this.{{% /note %}}
    {{% tip %}}Here's a tip for you.{{% /tip %}}
    {{% warning %}}I am warning you.{{% /warning %}}

    <div class="aui-message tip">
      <div class="icon"></div>
      <p class="title">
          <strong>Hello world</strong>
          If you already know the theory and want to jump straight into development, read our <a href="/cloud/jira/platform/getting-started">Getting started guide</a> to build your first JIRA Cloud add-on.
      </p>
    </div>

    {{< include path="/Users/johnbecker/repository/tiger-package/lib/controller.md">}}
    */

  }

  _isImportant(elem)
  {
    let regex = /{{%\s*(note|tip|warning)\s*%}}(.|\n)*?{{%\s*\/(note|tip|warning)\s*%}}/ig;
    return regex.test(elem);

  }

  _treeWalk(tree){
    let regex = /{{%\s*(note|tip|warning)\s*%}}(.|\n)*?{{%\s*\/(note|tip|warning)\s*%}}/ig;
    for (var i = 0; i < tree.length; i++) {
      //tag -> tree[i][0]  tree[i][0] = "p class='tiger'"
      //string -> tree[i][1]

      //contains note, tip, or warning
      let matchArray = tree[i][1].match(regex);
      (matchArray!=null){

      }



    }

    return tree;
  }

  _readInclude(){}

  toString(){
    //console.log(this.HTMLtree);
    return markdown.renderJsonML(this._treeWalk(this.HTMLtree));
  }
}


module.exports = MDPreview;
