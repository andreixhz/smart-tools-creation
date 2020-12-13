module.exports = {
    "main":"/src/",
    "files":[
        "/index.js",
        "/style.css"
    ],
    "type":[
        "pages/",
        "components/"
    ],
    "data":`import React from 'react';
import './style.css';

function TEMP_NAME () {
    return (
        <div className="TEMP_NAME">
            <h1>TEMP_NAME</h1>
        </div>
    );
}

export default TEMP_NAME;
`,
    "style":`.TEMP_NAME{
    margin-top:10px;
}`
}