import React from "react";
import ReactDOM from "react-dom/client";
const root=document.getElementById("root")
root.innerHTML="Hi This is From App.js"

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("div",{id:"heading1"},"HEADING 1"),
        React.createElement("div",{id:"heading2"},"HEADING 2"),
        ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("div",{id:"heading3"},"HEADING3"),
        React.createElement("div",{id:"heading4"},"HEADING4")
    ]),
    ]);

    const root3=ReactDOM.createRoot(document.getElementById("root"));
    root3.render(parent)