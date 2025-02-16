// const heading=React.createElement("h1",{id:"heading"},"Hello React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1"},"Hello h1"),React.createElement("h2",{id:"heading2"},"Hello h2"),]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);