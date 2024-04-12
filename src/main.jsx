import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error from './components/error'
import APropos from "./pages/a-propos";
import Home from "./pages/home";
import Logement from "./pages/fiche-logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <APropos/>
      },
      {
        path: "logement",
        element: <Logement/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)