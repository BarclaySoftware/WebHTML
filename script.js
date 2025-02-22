require.config({ paths: { 'vs': 'https://cdn360.pages.dev/library/andorra/min/vs' } });
require(['vs/editor/editor.main'], function () {
    andorra.editor.defineTheme('WebScript', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            // { token: 'comment', foreground: '58a74a', fontStyle: 'italic' },
            // { token: 'comment.doc', foreground: '58a74a', fontStyle: 'italic' },
            { token: 'comment', foreground: '58a74a' },
            { token: 'comment.doc', foreground: '58a74a' },
            { token: 'tag', foreground: '579dd7' },
            { token: 'variable', foreground: '2e95d3' },
            { token: 'variable.predefined', foreground: '2e95d3' },
            { token: 'variable.parameter', foreground: '00a67d' },
            { token: 'constant', foreground: '00a67d' },
            { token: 'number', foreground: 'df3079' },
            { token: 'number.hex', foreground: 'df3079' },
            { token: 'regexp', foreground: 'df3079' },
            { token: 'annotation', foreground: '0d0d0d' },
            { token: 'type', foreground: 'f22c3d' },
            { token: 'delimiter', foreground: 'ffffff' },
            { token: 'delimiter.html', foreground: 'ffffff' },
            { token: 'delimiter.xml', foreground: '868686' },
            { token: 'tag.id.pug', foreground: 'df3079' },
            { token: 'tag.class.pug', foreground: 'df3079' },
            { token: 'meta.scss', foreground: 'e9950c' },
            { token: 'meta.tag', foreground: '000000' },
            { token: 'metatag', foreground: 'f22c3d' },
            { token: 'metatag.content.html', foreground: '2e95d3' },
            { token: 'metatag.html', foreground: '868686' },
            { token: 'metatag.xml', foreground: '868686' },
            { token: 'metatag.php', foreground: '868686' },
            { token: 'key', foreground: '2e95d3' },
            { token: 'string.key.json', foreground: '2e95d3' },
            { token: 'string.value.json', foreground: 'df3079' },
            { token: 'attribute.name', foreground: 'df3079' },
            { token: 'attribute.value', foreground: '00a67d' },
            { token: 'attribute.value.number.css', foreground: 'df3079' },
            { token: 'attribute.value.unit.css', foreground: 'df3079' },
            { token: 'attribute.value.hex.css', foreground: 'df3079' },
            { token: 'string', foreground: '00a67d' },
            { token: 'string.sql', foreground: 'f22c3d' },
            { token: 'keyword', foreground: '2e95d3' },
            { token: 'keyword.flow', foreground: 'df3079' },
            { token: 'keyword.json', foreground: 'df3079' },
            { token: 'keyword.flow.scss', foreground: '2e95d3' },
            { token: 'operator.scss', foreground: '868686' },
            { token: 'operator.sql', foreground: 'df3079' },
            { token: 'operator.swift', foreground: '868686' },
            { token: 'predefined.sql', foreground: '2e95d3' },
        ],
        colors: {
            'editorCursor.foreground': '#9e9e9e',
            'editor.background': '#0d0d0d',
            'editor.foreground': '#ffffff',
            'editorBracketHighlight.foreground1': '#ffffff',
            'editorBracketHighlight.foreground2': '#ffffff',
            'editorBracketHighlight.foreground3': '#ffffff',
            'editorBracketHighlight.foreground4': '#ffffff',
            'editorBracketHighlight.foreground5': '#ffffff',
            'editorBracketHighlight.foreground6': '#ffffff',
            'editor.inactiveSelection': '#2f2f2f',
            'editor.indentGuide1': '#2f2f2f',
            'editor.activeIndentGuide1': '#2d2d2d',
            'editor.selectionHighlight': '#93c9ff',
            'editor.lineHighlightBackground': '#1f1f1f',
            'editorLineNumber.foreground': '#5d5d5d',
            'editor.selectionBackground': '#303030',
            'editorActiveLineNumber.foreground': '#c1c1c1',
        }
    });

    var editor = andorra.editor.create(document.getElementById('editor'), {
        value: ``,
        language: 'html',
        theme: 'WebScript',
        automaticLayout: true,
        fontSize: 16,
        fontFamily: `'Consolium', 'Sevolt Emoji Color', monospace`,
        scrollBeyondLastLine: true,
        minimap: { enabled: true },
        lineNumbers: 'on',
        wordWrap: 'off',
        suggestOnTriggerCharacters: true,
        quickSuggestions: { other: true, comments: true, strings: true },
        parameterHints: { enabled: true },
        acceptSuggestionOnEnter: 'on',
        tabCompletion: 'on',
        cursorSmoothCaretAnimation: 'on',
        snippetSuggestions: 'bottom',
        autoClosingComments: 'always',
        matchBrackets: 'always',
        multiCursorModifier: 'alt',
        multiCursorPaste: 'full',
        showFoldingControls: 'mouseover',
        suggestSelection: 'first',
        unusualLineTerminators: 'prompt',
        cursorStyle: 'line',
        autoSurround: 'brackets',
        colorDecoratorActivatedOn: 'clickAndHover',
        cursorSurroundingLinesStyle: 'default',
        experimentalWhitespaceRendering: 'font',
        foldingStrategy: 'indentation',
        multiCursorLimit: 1000,
        occurrencesHighlight: 'singleFile',
        peekWidgetDefaultFocus: 'editor',
        renderLineHighlight: 'gutter',
        renderWhitespace: 'selection',
        wordBreak: 'normal',
        wrappingStrategy: 'advanced',
    });

    editor.onDidChangeModelContent(() => {
        const html = editor.getValue();
        preview.srcdoc = html;
    });

    updatePreview();

    const font = new FontFace('Consolium', 'url(https://webhtml.pages.dev/consoli.ttf)');

    font.load().then(() => {
        document.fonts.add(font);
        andorra.editor.remeasureFonts();
    }).catch((error) => {
        console.error('Error loading custom font:', error);
    });

    function openFile() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'text/html';
        input.onchange = function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function() {
                editor.setValue(reader.result);
                document.title = file.name;
                updatePreview();
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function saveFile() {
        var content = editor.getValue();
        var blob = new Blob([content], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        var currentDate = new Date().toISOString().slice(0, 19).replace(/[-T:/]/g, '');
        var fileName = 'html_' + currentDate + '.html';
        a.download = fileName;
        document.title = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        isModified = false;
    }

    function saveDump() {
        var content = editor.getValue();
        var blob = new Blob([content], { type: 'text/' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        var currentDate = new Date().toISOString().slice(0, 19).replace(/[-T:/]/g, '');
        var fileName = 'savedump_' + currentDate + '.dt';
        a.download = fileName;
        document.title = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        isModified = false;
    }

    document.getElementById('openButton').addEventListener('click', openFile);
    document.getElementById('saveButton').addEventListener('click', saveFile);
    document.getElementById('saveDump').addEventListener('click', saveDump);

    var isModified = false;

    editor.onDidChangeModelContent(function() {
        isModified = true;
        var fileName = document.title;
        if (!fileName.endsWith('*')) {
            fileName += "*";
        }
        document.title = fileName;
        updatePreview();
    });

    function updatePreview() {
        var preview = document.getElementById('preview');
        preview.srcdoc = editor.getValue();
    }

    window.addEventListener('beforeunload', function(e) {
        if (isModified) {
            var confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        }
    });

    document.getElementById('lineWrapSelect').addEventListener('change', function() {
        var value = this.value;
        editor.updateOptions({ wordWrap: value });
    });

    document.getElementById('minimapSelect').addEventListener('change', function() {
        var value = this.value;
        editor.updateOptions({ minimap: { enabled: value === 'on' } });
    });

    window.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            saveFile();
        } else if (event.ctrlKey && event.key === 'o') {
            event.preventDefault();
            openFile();
        } else if (event.altKey && event.key === 'm') {
            event.preventDefault();
            var minimapEnabled = editor.getOption(andorra.editor.EditorOption.minimap).enabled;
            editor.updateOptions({ minimap: { enabled: !minimapEnabled } });
            document.getElementById('minimapSelect').value = minimapEnabled ? 'off' : 'on';
        } else if (event.altKey && event.key === 'z') {
            event.preventDefault();
            var wordWrapEnabled = editor.getOption(andorra.editor.EditorOption.wordWrap) === 'on';
            editor.updateOptions({ wordWrap: wordWrapEnabled ? 'off' : 'on' });
            document.getElementById('lineWrapSelect').value = wordWrapEnabled ? 'off' : 'on';
        }
    });

    var divider = document.getElementById('divider');
    var editorContainer = document.getElementById('editor-container');
    var editorElement = document.getElementById('editor');
    var isResizing = false;

    divider.addEventListener('mousedown', function(e) {
        isResizing = true;
        document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('mousemove', function(e) {
        if (isResizing) {
            var offsetRight = editorContainer.clientWidth - (e.clientX - editorContainer.offsetLeft);
            var editorWidth = editorContainer.clientWidth - offsetRight;
            editorWidth = Math.max(editorWidth, 100);
            editorElement.style.width = editorWidth + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = 'default';
        }
    });
});