import React from "react";
import ReactDOM from "react-dom";
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.firstName),
    React.createElement("h2", {}, props.lastName),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "hello" }, "Adopt Me!!!"),
    React.createElement(Pet, {
      firstName: "Shubhankar",
      lastName: "Dwivedi",
    }),
    React.createElement(Pet, {
      firstName: "Roxy",
      lastName: "Ravina",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
