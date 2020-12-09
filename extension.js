const vscode = require('vscode');
const Create = require('./src/FileManager');
const GetText = require('./src/GetText');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "smart-tools" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('smart-tools.CreatePage', function () {		
		GetText((e) => Create(0, e));
	});

	disposable = vscode.commands.registerCommand('smart-tools.CreateComponent', function () {
		GetText((e) => Create(1, e));
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
