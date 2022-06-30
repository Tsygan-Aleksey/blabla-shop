import React from "react";
import { Provider } from "react-redux";
import { store } from "store";
import ReactDOM from "react-dom/client";
import { App } from "components";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "./server";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
