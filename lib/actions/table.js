'use babel';

export default function(editor) {
  let selection = editor.getSelectedText();
  if(selection==''){
    editor.insertText(`
| Head 1 |  Head 2 | Head 3 |
|--------|---------|--------|
| col 1  |  col 2  | col 3  |
| col 1  |  col 2  | col 3  |
| col 1  |  col 2  | col 3  |`);
  }
  else{
    let rows = selection.split(/\n/);
    let table = new Array();

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i].trim();
      table.push('|  '+row.replace(/\t+/g, "  |  ")+'  |');
    }

    let head = table.shift();
    let num = head.match(/\|/g).length -1;
    let header = '|------'.repeat(num)+'|';
    table.unshift(head, header);

    editor.insertText(table.join('\n')+'\n');
  }

}
