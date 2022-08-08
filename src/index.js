import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Historial } from "./pages/Historial";
import { Layout } from "./components/Layout";

import { ContextProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </ContextProvider>
);
