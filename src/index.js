import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: '/Home',
    element: <Home />
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();