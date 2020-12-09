const vscode = require('vscode');

module.exports = function GetText(callback){

    let name;

    const picker = vscode.window.createQuickPick();
    picker.show();
    console.log(picker);

    picker.onDidHide(() => picker.dispose());
    picker.onDidAccept(() => {
        const selected = picker.selectedItems[0];

        if (!selected && picker.activeItems.length > 0) {
          return
        }

        callback(name);
        picker.hide();

    });
  
    picker.onDidChangeValue((value) => {
        name = value
    });

};