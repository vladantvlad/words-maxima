import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Words from "./components/pages/Words";
import Word from "./components/pages/Word";
import SelectedWords from "./components/pages//words/SelectedWords";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Words />,
    children: [
      {
        path: "letter/:id",
        element:<SelectedWords />
      }
      
    ]
  },
  {
    path: "/word/:id",
    element: <Word />
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

