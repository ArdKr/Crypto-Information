import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./index.css";

// App component
import App from "./App";

// Redux
import Store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
