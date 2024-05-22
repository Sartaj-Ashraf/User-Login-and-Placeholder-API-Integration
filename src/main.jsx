import React from 'react'
import App from './App.jsx'


// React Router Providers.
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the packages which are to be rendered.
import Homepage from '/src//Pages/Homepage/Homepage.jsx';
import LoginPage from '/src/Pages/Login/LoginPage.jsx';

// Setting up router paths for the react router, 
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/src/Pages/Homepage/Homepage.jsx",
    element: <Homepage />,
  },
  {
    path: "/src/Pages/Login/LoginPage.jsx",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


