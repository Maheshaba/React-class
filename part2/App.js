//import React from "react";
//import ReactDOM from "react-dom/client";

//-> This is component composition example
const Title = () => (
  <h1 className="head" tabIndex="5">
    <h2>10000</h2>
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {12345 + 8989}
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
