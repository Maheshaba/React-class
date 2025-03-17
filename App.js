//<div id= "parent">
//<div id = "child">
//<h1>I'm h1 tag </h1>
//<h2> I'm h1 tag </h2>
//</div>
//</div>*/

//ReactElement(Object) => HTML (Browser understand )*/

const parent = React.createElement("div", { di: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
