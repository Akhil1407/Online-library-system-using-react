import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store} from "./redux/store";  // Ensure correct import of your Redux store
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
