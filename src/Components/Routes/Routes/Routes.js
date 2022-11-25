import DashboardLayout from "../../Layouts/DashboardLayout";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard.jsx";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
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
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/my-orders", element: <MyOrders /> },
      { path: "/dashboard/add-product", element: <AddProduct /> },
      { path: "/dashboard/my-products", element: <MyProducts /> },
      { path: "/dashboard/my-buyers", element: <MyBuyers /> },
      { path: "/dashboard/all-sellers", element: <AllSellers /> },
      { path: "/dashboard/all-buyers", element: <AllBuyers /> },
      { path: "/dashboard/reported-items", element: <ReportedItems /> },
    ],
  },
]);
