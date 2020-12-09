const vscode = require('vscode');

async function GetPath() {
    const workspaceExists = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0;
    if (!vscode.window.activeTextEditor && !workspaceExists) {
        vscode.window.showInformationMessage('You do not have any workspaces open.');
        return undefined;
    }

    if (vscode.window.activeTextEditor) {
		
		return vscode.window.activeTextEditor.document.uri.path.substring(1);
		
    } else if (vscode.workspace.workspaceFolders.length === 1) {
        return vscode.workspace.workspaceFolders[0].uri.path.substring(1);
    } else {

        const ws = await vscode.window.showWorkspaceFolderPick();

        if(!ws) {
            return undefined;
        }

        return ws.uri.path.substring(1);
    }
}

module.exports = GetPath;