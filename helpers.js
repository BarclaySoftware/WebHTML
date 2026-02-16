// Copyright (c) Aurorasoft Group. All Rights Reserved.
require([ 'vs/editor/editor.main', 'vs/language/typescript/andorra.contribution' ], function () {
    andorra.languages.registerCompletionItemProvider('html', {
        provideCompletionItems: function () {
            var suggestions = [
                {
                    label: 'WebHTML Example Template',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="generator" content="Aurorasoft WebHTML">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="shortcut icon" href="https://webhtml.pages.dev/cdn/branding/images/favicon/favicon.svg" type="image/x-icon">\n    <title>My Webpage</title>\n    <style>\n        body {\n            font-family: sans-serif;\n        }\n    </style>\n</head>\n<body>\n    <h1>Hello World!</h1>\n    <p>This is my webpage text.</p>\n</body>\n</html>`,
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'A basic, pre-filled HTML5 template from WebHTML.'
                },
                {
                    label: 'WebHTML Landing Page Template',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="generator" content="Aurorasoft WebHTML">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Webpage</title>\n    <link rel="shortcut icon" href="https://webhtml.pages.dev/cdn/branding/images/favicon/favicon.svg" type="image/x-icon">\n    <script type="module" src="https://webtelegraph.pages.dev/components/wledig.js"></script>\n    <style>\n        body {\n            font-family: sans-serif;\n            margin: 0;\n        }\n        h1, h2 {\n            text-align: center;\n        }\n        .blurb {\n            text-align: center;\n            line-height: 30px;\n        }\n        wledig-accordion-item {\n            font-family: sans-serif;\n        }\n        header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 10px 20px;\n            border-bottom: 1px solid #ccc;\n        }\n        header img {\n            height: 30px;\n        }\n        header .buttons {\n            display: flex;\n            gap: 10px;\n        }\n        header button {\n            font-family: sans-serif;\n            font-weight: 700;\n            color: #ffffff;\n            background-color: #1f75fe;\n            transition: background-color 400ms;\n            border: none;\n            border-radius: 6px;\n            padding: 10px 10px;\n            cursor: pointer;\n        }\n        header button:hover {\n            background-color: #1cac78;\n        }\n        .content {\n            margin: 60px;\n        }\n    </style>\n</head>\n<body>\n    <header>\n        <img src="" alt="Logo">\n        <div class="buttons">\n            <a href=""><button>My Button 1</button></a>\n            <a href=""><button>My Button 2</button></a>\n        </div>\n    </header>\n    <div class="content">\n        <h1>Add a Catchy Headline Here</h1>\n\n        <p class="blurb">Explain a bit more about your company, service, or product here.</p>\n\n        <wledig-divider></wledig-divider>\n\n        <h4>Section Heading</h4>\n        <p>Add more information in the accordions below... if you want.</p>\n\n        <wledig-accordion>\n            <wledig-accordion-item>\n                <span slot="heading">Item 1</span>\n                <div class="panel">\n                    Panel one content\n                </div>\n            </wledig-accordion-item>\n            <wledig-accordion-item>\n                <span slot="heading">Item 2</span>\n                <div class="panel">\n                    Panel 2 content\n                </div>\n            </wledig-accordion-item>\n            <wledig-accordion-item>\n                <span slot="heading">Item 3</span>\n                <div class="panel">\n                    Panel 3 content\n                </div>\n            </wledig-accordion-item>\n            <wledig-accordion-item>\n                <span slot="heading">Item 4</span>\n                <div class="panel">\n                    Panel 4 content\n                </div>\n            </wledig-accordion-item>\n        </wledig-accordion>\n    </div>\n</body>\n</html>`,
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'A basic langing page template from Aurorasoft WebHTML using Wledig UI.'
                },
                {
                    label: 'WebHTML Blank Template',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="generator" content="Aurorasoft WebHTML">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>$1</title>\n    <link rel="shortcut icon" href="$2https://webhtml.pages.dev/cdn/branding/images/favicon/favicon.svg" type="image/x-icon">\n    <style>\n        $3\n    </style>\n</head>\n<body>\n    $4\n</body>\n</html>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Aurorasoft WebHTML default HTML template.'
                },
                {
                    label: 'a',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<a href="$1">$2</a>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Link tag.'
                },
                {
                    label: 'area',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<area shape="$1" coords="$2" href="$3" alt="$4" title="$5">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Area element for image maps.'
                },
                {
                    label: 'article',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<article>$1</article>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Article content.'
                },
                {
                    label: 'aside',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<aside>$1</aside>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Side content.'
                },
                {
                    label: 'audio',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<audio controls><source src="$1" type="audio/mpeg">Your browser does not support the audio element.</audio>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Audio element.'
                },
                {
                    label: 'b',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<b>$1</b>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Bold text.'
                },
                {
                    label: 'base',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<base href="$1">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Specifies a base URL for relative URLs.'
                },
                {
                    label: 'bdi',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<bdi>$1</bdi>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Bi-directional isolation.'
                },
                {
                    label: 'bdo',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<bdo dir="$1">$2</bdo>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Bi-directional override.'
                },
                {
                    label: 'blockquote',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<blockquote>$1</blockquote>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Block quotation.'
                },
                {
                    label: 'body',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<body>$1</body>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Body of the document.'
                },
                {
                    label: 'br',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<br>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Line break.'
                },
                {
                    label: 'button',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<button>$1</button>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Button element.'
                },
                {
                    label: 'canvas',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<canvas id="$1" width="$2" height="$3">$4</canvas>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Canvas element for drawing graphics.'
                },
                {
                    label: 'caption',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<caption>$1</caption>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table caption.'
                },
                {
                    label: 'cite',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<cite>$1</cite>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Citation.'
                },
                {
                    label: 'code',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<code>$1</code>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline code.'
                },
                {
                    label: 'col',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<col span="$1" style="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Column properties for a table.'
                },
                {
                    label: 'colgroup',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<colgroup>$1</colgroup>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Group of one or more columns in a table.'
                },
                {
                    label: 'data',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<data value="$1">$2</data>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Links a content with a value.'
                },
                {
                    label: 'datalist',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<datalist id="$1">$2</datalist>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'List of options for input elements.'
                },
                {
                    label: 'dd',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dd>$1</dd>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Description of a term in a description list.'
                },
                {
                    label: 'del',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<del>$1</del>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Deleted text.'
                },
                {
                    label: 'details',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<details>$1</details>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Details disclosure widget.'
                },
                {
                    label: 'dfn',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dfn>$1</dfn>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Definition.'
                },
                {
                    label: 'dialog',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dialog>$1</dialog>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Dialog box.'
                },
                {
                    label: 'div',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<div>$1</div>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Generic container.'
                },
                {
                    label: 'dl',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dl>$1</dl>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Description list.'
                },
                {
                    label: 'dt',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<dt>$1</dt>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Term in a description list.'
                },
                {
                    label: 'em',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<em>$1</em>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Emphasized text.'
                },
                {
                    label: 'embed',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<embed src="$1" type="$2" width="$3" height="$4">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Embedded content.'
                },
                {
                    label: 'fieldset',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<fieldset>$1</fieldset>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Group related form controls.'
                },
                {
                    label: 'figcaption',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<figcaption>$1</figcaption>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Figure caption.'
                },
                {
                    label: 'figure',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<figure>$1</figure>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Figure element.'
                },
                {
                    label: 'footer',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<footer>$1</footer>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Footer content.'
                },
                {
                    label: 'form',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<form action="$1" method="$2">$3</form>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Form element.'
                },
                {
                    label: 'h1',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h1>$1</h1>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 1.'
                },
                {
                    label: 'h2',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h2>$1</h2>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 2.'
                },
                {
                    label: 'h3',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h3>$1</h3>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 3.'
                },
                {
                    label: 'h4',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h4>$1</h4>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 4.'
                },
                {
                    label: 'h5',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h5>$1</h5>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 5.'
                },
                {
                    label: 'h6',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<h6>$1</h6>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header 6.'
                },
                {
                    label: 'header',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<header>$1</header>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Header section.'
                },
                {
                    label: 'hr',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<hr>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Horizontal rule.'
                },
                {
                    label: 'html',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<html lang="en">$1</html>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML root element.'
                },
                {
                    label: 'i',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<i>$1</i>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Italic text.'
                },
                {
                    label: 'iframe',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<iframe src="$1" width="$2" height="$3"></iframe>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline frame.'
                },
                {
                    label: 'img',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<img src="$1" alt="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Image tag.'
                },
                {
                    label: 'input',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<input type="$1" name="$2" placeholder="$3">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Input element.'
                },
                {
                    label: 'ins',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ins>$1</ins>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inserted text.'
                },
                {
                    label: 'kbd',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<kbd>$1</kbd>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Keyboard input.'
                },
                {
                    label: 'label',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<label for="$1">$2</label>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Label for form controls.'
                },
                {
                    label: 'legend',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<legend>$1</legend>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Form legend.'
                },
                {
                    label: 'li',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<li>$1</li>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'List item.'
                },
                {
                    label: 'link',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<link rel="stylesheet" href="$1">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'CSS link.'
                },
                {
                    label: 'link:icon',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<link rel="shortcut icon" href="$1" type="image/x-icon">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Favicon link.'
                },
                {
                    label: 'main',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<main>$1</main>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Main content section.'
                },
                {
                    label: 'map',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<map name="$1">$2</map>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Image map.'
                },
                {
                    label: 'mark',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<mark>$1</mark>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Highlighted text.'
                },
                {
                    label: 'meta',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<meta name="$1" content="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Metadata about the document.'
                },
                {
                    label: 'meter',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<meter value="$1" min="$2" max="$3" low="$4" high="$5" optimum="$6">$7</meter>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Gauge control.'
                },
                {
                    label: 'nav',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<nav>$1</nav>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Navigation links.'
                },
                {
                    label: 'noscript',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<noscript>$1</noscript>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Content for browsers with JavaScript disabled.'
                },
                {
                    label: 'object',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<object data="$1" type="$2" width="$3" height="$4">$5</object>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Embedded object.'
                },
                {
                    label: 'ol',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ol>$1</ol>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ordered list.'
                },
                {
                    label: 'optgroup',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<optgroup label="$1">$2</optgroup>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Group of options within a select dropdown.'
                },
                {
                    label: 'option',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<option value="$1">$2</option>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Option element inside a select dropdown.'
                },
                {
                    label: 'output',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<output for="$1" name="$2">$3</output>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Result of a calculation or user action.'
                },
                {
                    label: 'p',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<p>$1</p>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Paragraph.'
                },
                {
                    label: 'picture',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<picture><source srcset="$1" type="image/webp"><img src="$2" alt="$3"></picture>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Responsive images.'
                },
                {
                    label: 'pre',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<pre>$1</pre>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Preformatted text.'
                },
                {
                    label: 'progress',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<progress value="$1" max="$2">$3</progress>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Progress bar.'
                },
                {
                    label: 'q',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<q>$1</q>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline quotation.'
                },
                {
                    label: 'rp',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<rp>$1</rp>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ruby parenthesis for ruby annotations.'
                },
                {
                    label: 'rt',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<rt>$1</rt>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ruby text for ruby annotations.'
                },
                {
                    label: 'ruby',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ruby>$1<rt>$2</rt></ruby>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Ruby annotation.'
                },
                {
                    label: 's',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<s>$1</s>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Strikethrough text.'
                },
                {
                    label: 'script',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<script>$1</script>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Script tags.'
                },
                {
                    label: 'script:module',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<script type="module" src="$1"></script>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Script tags.'
                },
                {
                    label: 'script:src',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<script src="$1"></script>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Script tags.'
                },
                {
                    label: 'section',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<section>$1</section>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Section of content.'
                },
                {
                    label: 'select',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<select name="$1" id="$2">$3</select>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Select dropdown menu.'
                },
                {
                    label: 'small',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<small>$1</small>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Smaller text.'
                },
                {
                    label: 'source',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<source src="$1" type="$2">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Source for media elements.'
                },
                {
                    label: 'span',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<span>$1</span>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Inline container.'
                },
                {
                    label: 'strong',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<strong>$1</strong>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Strong emphasis.'
                },
                {
                    label: 'style',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<style>$1</style>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Internal CSS style.'
                },
                {
                    label: 'sub',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<sub>$1</sub>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Subscript text.'
                },
                {
                    label: 'summary',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<summary>$1</summary>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Summary of details.'
                },
                {
                    label: 'sup',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<sup>$1</sup>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Superscript text.'
                },
                {
                    label: 'table',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<table>$1</table>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table element.'
                },
                {
                    label: 'tbody',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<tbody>$1</tbody>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table body.'
                },
                {
                    label: 'td',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<td>$1</td>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table data cell.'
                },
                {
                    label: 'template',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<template>$1</template>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Template content.'
                },
                {
                    label: 'textarea',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<textarea rows="$1" cols="$2">$3</textarea>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Multiline input field.'
                },
                {
                    label: 'tfoot',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<tfoot>$1</tfoot>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table footer.'
                },
                {
                    label: 'th',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<th>$1</th>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table header cell.'
                },
                {
                    label: 'thead',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<thead>$1</thead>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table header section.'
                },
                {
                    label: 'time',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<time datetime="$1">$2</time>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Time element.'
                },
                {
                    label: 'title',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<title>$1</title>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Title of the document.'
                },
                {
                    label: 'tr',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<tr>$1</tr>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Table row.'
                },
                {
                    label: 'track',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<track src="$1" kind="subtitles" srclang="$2" label="$3">',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Text track for media elements.'
                },
                {
                    label: 'u',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<u>$1</u>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Underlined text.'
                },
                {
                    label: 'ul',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<ul>$1</ul>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Unordered list.'
                },
                {
                    label: 'var',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<var>$1</var>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Variable name.'
                },
                {
                    label: 'video',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<video controls><source src="$1" type="video/mp4">Your browser does not support the video element.</video>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Video element.'
                },
                {
                    label: 'wbr',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '<wbr>',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Word break opportunity.'
                } ,
                {
                    label: '@font-face (CSS only)',
                    kind: andorra.languages.CompletionItemKind.Snippet,
                    insertText: '@font-face {\n    font-family: $1;\n    src: url($2);\n}',
                    insertTextRules: andorra.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Define a font-face into your CSS code.'
                }                
            ];
            return { suggestions: suggestions };
        }
    });
});