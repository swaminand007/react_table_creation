import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order.jsx";
import Edit from "./Edit.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Edit />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
