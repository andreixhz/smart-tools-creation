const GetPath = require("./GetPath");
const Data = require("./Data");
const vscode = require('vscode');
const fs = require("fs");

async function Create(type, name){

    const path = await GetPath();
    const main = path + Data.main;
    const target = main + Data.type[type];

    if (!fs.existsSync(main))
        fs.mkdirSync(main);

    if (!fs.existsSync(target))
        fs.mkdirSync(target);

    fs.mkdirSync(target + name);
    
    const jsData = Data.data.replace(/TEMP_NAME/g, name);
    const cssData = Data.style.replace(/TEMP_NAME/g, name);

    fs.writeFileSync(target + name + Data.files[0], jsData);
    fs.writeFileSync(target + name + Data.files[1], cssData);
    
    vscode.window.showInformationMessage("Created with sucess: " + name);

}

module.exports = Create;