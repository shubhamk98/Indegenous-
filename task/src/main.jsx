import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SidebarProvider } from "./Context/SidebarContext";
import { ApiProvider } from "./Context/ContentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </SidebarProvider>
  </React.StrictMode>
);
