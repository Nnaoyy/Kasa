import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error from './components/error'
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import Logement from "./pages/logement";

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
        element: <AboutUs/>
      },
      {
        path: "logement/:houseId",
        element: <Logement/>
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