# Technical Writer's IDE
This IDE offers everything a tech writer needs in one place so you can write your docs and make shit go.

Technical Writer's IDE Features:

* Markdown Toolbar
* Markdown Validator
* Customizable Markdown Previewer
* Grammar Checker
* JIRA Task List Integration

## TODOs

* Markdown Toolbar
  * ~~Add multi-icon dropdown list for the below functions.~~
  * ~~Insert markdown table -> I always forget what a markdown table looks like, one click and it inserts a nice empty one~~
  * ~~Numbered lists -> turn selection into a numbered list or returns empty numbered list example~~
  * ~~Bullet lists -> turn selection into a bullet list or returns empty bullet list example~~
  * ~~Codeblock fences for javascript, php, ect~~
    * ~~Reads your code and identifies the type~~
  * ~~Image -> inserts empty markdown image~~
  * ~~Strikeout~~
  * ~~Bolding~~
  * ~~Italics~~
  * ~~Link~~

* Special *Company* Functions
  * ~~Insert note, tip, warning~~
  * ~~Insert a content include~~

* ~~Markdown Validator~~
  * ~~Attach markdown-validator panel to the markdown file it's validating. Currently shows for every tab. -> can't do this. Panels can't be attached to a tab.~~
  * ~~run markdown panel on editor change.~~
  * ~~run markdown panel on tab change.~~
  * Show markdown errors with contextual highlights on the page

* Markdown Previewer
  ~~* Previews your .md document in a split-pane previewer~~
  * Customize the previewer to look like your site
  ~~* Updates previewer as you type~~
  ~~* renders notes, tips, warnings~~
  * Polish
    * ~~Render includes~~
    * Improve CSS on notes, warning, and tips
    * ~~set image path for rendering~~
    * set include path for rendering
    * strip unique headers
    * Code samples CSS + Shrink when too large.
    * table css

* JIRA Integration
  * Show your tasks
  * Allow you to update and close tasks
  * Scan the page and create tasks for keywords : TODO-JIRA:

* Grammar Checker
  * Integrate a Grammar API for doc validation

* Visual Github integration
  * Use the d3js library to show a visual representation of bitbucket branches (http://bl.ocks.org/mbostock/4339083)
  * allow to commit and merge branches by dragging streams together.

* Bugs
  * Throws "no action" when no files are open and user presses button.
