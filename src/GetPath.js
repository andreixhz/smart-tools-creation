const vscode = require('vscode');

async function GetPath() {
    const workspaceExists = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0;
    if (!vscode.window.activeTextEditor && !workspaceExists) {
        vscode.window.showInformationMessage('Open any workspace');
        return undefined;
    }

    if (vscode.workspace.workspaceFolders.length === 1) {
        return {
            path: vscode.workspace.workspaceFolders[0].uri,
            type: 'workspace'
        };
    } else {
        const ws = await vscode.window.showWorkspaceFolderPick();

        if(!ws) {
            return undefined;
        }

        return {
            path: ws.uri,
            type: 'workspace'
        };
    }
}

module.exports = GetPath;