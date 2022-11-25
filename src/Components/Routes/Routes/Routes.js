import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard.jsx";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Share/ErrorPage/ErrorPage";
import SingUp from "../../Pages/SingUp/SingUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayouts } = require("../../Layouts/MainLayouts");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/singup", element: <SingUp /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
]);
