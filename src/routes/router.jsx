import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import AddCustomer from "../pages/AddCustomer";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound"; // 👈 Import 404 Page

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, // 👈 Custom error element
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "add-customer",
        element: <AddCustomer />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*", // 👈 Catches any invalid / unknown URL paths
        element: <NotFound />,
      },
    ],
  },
]);

export default router;