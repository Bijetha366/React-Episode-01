*React is an open library (library bcoz it can run independently in a small portion of your app) it will not enforce for an particular project structure.

CDN : Content delivery networks is a system of distributed netweorks which work together to deliver web content ( images , videos , js and css files) to the end user in their local geographical system.

When you create an react element it will not create an html element it will conside that an object which have id and children while create react element you will provideo 3 parameters first parameter will be the type of tag , 2nd parameter will be the id (id:"heading") , 3rd parameter will the children there you can pass the content wich you need in the tag or else again you create an react element .

ex:   cont heading = React.createElement("h1",{id:"heading},"Hello World");

1.if you want to create parent and child structure: like "div" tag parent and again an "div" child  and then child "h1"

<div id="root></div>

<div id="parent">
<div id="child">
    <h1>hello world</h1>
</div>
</div>

render the parent inside the html div root tag

<div id = "root"><div>

cont parent=React.createElement("div",{id:"parent"},createElement("div",{id:"child"},createElement("h1",{id:"heading"},"this is an heading tag")));
const root = ReactDOM.createRoot(document.getElementById("root));
root.render(parent);

2.if you want to create first parent div then to the parent div an child div , the child div should contain two siblings like h1 and h2?

you can create an react element by passing tag name , id , children ( the children can have either single or mulptiple children also if you  want to give multiple give in between square braces [])

<div id="root></div>

<div id="parent">
<div id="child">
    <h1>hello h1</h1>
    <h2>hello h2</h2>
</div>
</div>

<div id="root"></div>
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1"},"Hello h1"),React.createElement("h2",{id:"heading2"},"Hello h2"),]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

but this will give you an error :
Warning: Each child in a list should have a unique "key" prop.
