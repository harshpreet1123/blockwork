import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import AppWrapper from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider>
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  </ThirdwebProvider>
);
