import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from './components/error'
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import Logement from "./pages/logement";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <AboutUs/>
      },
      {
        path: "logement/:houseId",
        element: <Logement/>,
        errorElement: <Error/>
      },
      {
        path: "*",
        element: <Error/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)