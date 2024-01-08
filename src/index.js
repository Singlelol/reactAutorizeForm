import React from "react";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./store/auth-context";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
