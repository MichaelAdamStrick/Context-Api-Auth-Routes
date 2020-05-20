import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StoreProvider } from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  rootElement
);
