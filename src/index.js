import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";

// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
