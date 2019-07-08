import * as React from "react";
import { render } from "react-dom";
import ReduxSetup from "./Redux/ReduxSetup";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Welcome to Recipie Manager</h2>
      <p>Add updates</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<ReduxSetup />, rootElement);
