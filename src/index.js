import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Order />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
