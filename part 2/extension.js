const vscode = require('vscode');

function activate(context) {

    console.log('Congratulations, your extension "codemap" is now active!');

    let disposable = vscode.commands.registerCommand('extension.codemap', () => {
        vscode.window.showInformationMessage("Hello, codemap");
    });

    context.subscriptions.push(disposable);

    vscode.languages.registerHoverProvider('javascript', {
        provideHover(document, position, token) {

            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);

            if (word == "HELLO") {

                return new vscode.Hover("Hello, this is a codemap test.")
            }
        }
    });
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
}