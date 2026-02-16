require.config({ paths: { 'vs': 'https://apicenter.pages.dev/libraries/andorra/min/vs' } });
require([ 'vs/editor/editor.main', 'vs/language/typescript/andorra.contribution' ], function () {
    var editor = andorra.editor.create(document.getElementById('editor'), {
        autoClosingBrackets: 'always',
        autoClosingComments: 'always',
        autoClosingQuotes: 'always',
        automaticLayout: true,
        autoSurround: 'brackets',

        codeActionsOn: { 'editor': 'always' },
        codeActionsOnSave: { "source.fixAll": true, "source.organizeImports": true },
        colorDecorators: true,
        colorDecoratorsActivatedOn: "hover",
        comments: { insertSpace: true },
        contextmenu: true,
        copyWithSyntaxHighlighting: true,
        cursorBlinking: "blink", // "blink" | "smooth" | "phase" | "expand" | "solid"
        cursorSmoothCaretAnimation: "on",
        cursorStyle: 'line', // "line" | "block" | "underline" | "line-thin" | "block-outline" | "underline-thin"
        cursorSurroundingLinesStyle: 'default',

        defaultColorDecorators: "always",
        definitionLinkOpensInPeek: true,
        dragAndDrop: true,
        dropIntoEditor: { enabled: true, showDropSelector: true },

        editContext: true,
        experimentalWhitespaceRendering: 'font',

        find: { cursorMoveOnType: true, findOnType: true },
        foldingStrategy: 'indentation',
        fontFamily: `'Laurentia Code', monospace`,
        fontLigatures: "'ss19' 1",
        fontSize: 16,
        formatOnPaste: true,
        formatOnType: true,

        gotoLocation: { multiple: "peek" },
        guides: {  },

        hover: { enabled: true },

        language: 'html',
        lightbulb: { enabled: true },
        lineNumbers: 'on',
        links: true,

        matchBrackets: 'always',
        minimap: { enabled: true },
        mouseWheelZoom: true,
        multiCursorLimit: 1000,
        multiCursorModifier: 'alt',
        multiCursorPaste: 'full',

        occurrencesHighlight: 'singleFile',

        parameterHints: { cycle: true, enabled: true },
        peekWidgetDefaultFocus: 'editor',

        quickSuggestions: { other: true, comments: true, strings: true },
        quickSuggestionsDelay: 0,

        renderWhitespace: 'selection',

        scrollBeyondLastLine: true,
        showDeprecated: true,
        showFoldingControls: 'hover',
        snippetSuggestions: 'inline',
        suggestOnTriggerCharacters: true,
        suggestSelection: 'first',

        tabCompletion: 'on',
        tabFocusMode: true,
        theme: 'vs-dark',

        unusualLineTerminators: 'prompt',

        value: ``,

        wordBreak: 'normal',
        wordWrap: 'off',
        wrappingStrategy: 'advanced',
    });

    // Ensure any custom fonts load properly.
    function ensureFontsLoaded(callback) { document.fonts.ready.then(() => { andorra.editor.remeasureFonts(); callback(); }); }
    ensureFontsLoaded(() => { console.log("WebHTML UI Manager: Fonts applied successfully!"); });
    editor.onDidChangeModelContent(() => { const html = editor.getValue(); /* preview.srcdoc = html; */ });

    const PREVIEW_TITLE = 'Preview - Aurorasoft WebHTML';
    const PREVIEW_FAVICON = 'https://webhtml.pages.dev/cdn/branding/images/favicon/favicon.svg?v1';

    // Close any orphaned preview popups on load
    try { if (window.opener === null && window.name === 'LivePreviewPopup') { window.close(); } } catch (e) {}

    let previewPopupWindow = null;
    let popupPreviewActive = false;

    function togglePreviewPopup() {
        const button = document.getElementById('previewPopup');

        if (popupPreviewActive) {
            if (previewPopupWindow && !previewPopupWindow.closed) {
                previewPopupWindow.close();
            }

            popupPreviewActive = false;
            previewPopupWindow = null;

            button.textContent = 'Run';
            updatePreview();
            return;
        }

        previewPopupWindow = window.open(
            '',
            'LivePreviewPopup',
            'width=900,height=600,resizable=yes,scrollbars=yes,popups=yes'
        );

        if (!previewPopupWindow) {
            alert('Popup blocked! Please allow popups.');
            return;
        }

        previewPopupWindow.document.open();
        previewPopupWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>${PREVIEW_TITLE}</title>
            <link rel="icon" href="${PREVIEW_FAVICON}">
        </head>
        <body>
        ${editor.getValue()}
        </body>
        </html>
        `);
        previewPopupWindow.document.close();

        popupPreviewActive = true;
        button.textContent = 'Stop';

        const popupCloseInterval = setInterval(() => { if (!previewPopupWindow || previewPopupWindow.closed) { clearInterval(popupCloseInterval); if (popupPreviewActive) { togglePreviewPopup(); } } }, 500);
    }

    function closePreviewPopupSafely() { if (previewPopupWindow && !previewPopupWindow.closed) { previewPopupWindow.close(); } }

    updatePreview();

    function openFile() { var input = document.createElement('input'); input.type = 'file'; input.accept = 'text/html'; input.onchange = function(event) { var file = event.target.files[0]; var reader = new FileReader(); reader.onload = function() { editor.setValue(reader.result); document.title = file.name + ' - Aurorasoft WebHTML'; updatePreview(); }; reader.readAsText(file); }; input.click(); }

    function saveFile() { var content = editor.getValue(); var blob = new Blob([content], { type: 'text/html' }); var url = URL.createObjectURL(blob); var a = document.createElement('a'); a.href = url; var currentDate = new Date().toISOString().slice(0, 19).replace(/[-T:/]/g, ''); var fileName = 'WebHTML_' + currentDate + '.html'; a.download = fileName; document.title = fileName + ' - Aurorasoft WebHTML'; document.body.appendChild(a); a.click(); window.URL.revokeObjectURL(url); document.body.removeChild(a); isModified = false; }

    document.getElementById('openButton').addEventListener('click', openFile);
    document.getElementById('saveButton').addEventListener('click', saveFile);
    window.addEventListener('beforeunload', closePreviewPopupSafely);
    window.addEventListener('unload', closePreviewPopupSafely);

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
        if (previewPopupWindow && !previewPopupWindow.closed) {
            previewPopupWindow.document.open();
            previewPopupWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>${PREVIEW_TITLE}</title>
                <link rel="icon" type="image/png" href="${PREVIEW_FAVICON}">
            </head>
            <body>
            ${editor.getValue()}
            </body>
            </html>
            `);
            previewPopupWindow.document.close();
        }
    }

    window.addEventListener('beforeunload', function(e) { if (isModified) { var confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?'; e.returnValue = confirmationMessage; return confirmationMessage; } });

    document
    .getElementById('previewPopup')
    .addEventListener('click', togglePreviewPopup);

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

    var editorContainer = document.getElementById('editor-container');
    var editorElement = document.getElementById('editor');
});
