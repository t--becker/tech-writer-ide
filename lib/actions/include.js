/*
INCLUDE
CODE
{{ $path := .Get "path"}}
{{ $content := readFile $path }}
{{ $content | markdownify }}
CODE
USAGE
--------
{{< include path="docs/content/cloud/connect/concepts/javascript-api.snippet.md">}}
-----
USAGE
*/
