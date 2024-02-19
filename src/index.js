import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import { AccountDataProvider } from "./context/AccountDataContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
        <AccountDataProvider>
          <App />
        </AccountDataProvider>
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
