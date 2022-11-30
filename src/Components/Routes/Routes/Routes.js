import { serverUrl } from "../../Hooks/AllUrl/AllUrl";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard.jsx";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyWishList from "../../Pages/Dashboard/MyWishList/MyWishList";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import AdvertisedItems from "../../Pages/Home/AdvertisedItems/AdvertisedItems";
import Blog from "../../Pages/Home/Blog/Blog";
import AllCategory from "../../Pages/Home/Category/AllCategory";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Share/ErrorPage/ErrorPage";
import SingUp from "../../Pages/SingUp/SingUp";
import AdminPrivetRoute from "../AdminPrivetRoute/AdminPrivetRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SealerPrivetRoute from "../SealerPrivetRoute/SealerPrivetRoute";
import UserPrivetRoute from "../UserPrivetRoute/UserPrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayouts } = require("../../Layouts/MainLayouts");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/advertised-items",
        element: (
          <PrivateRoute>
            <SealerPrivetRoute>
              <AdvertisedItems />
            </SealerPrivetRoute>
          </PrivateRoute>
        ),
      },
      { path: "/singup", element: <SingUp /> },
      { path: "/login", element: <Login /> },
      {
        path: "/category",
        element: (
          <PrivateRoute>
            <AllCategory />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          return fetch(`${serverUrl}/category-products/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("access_Token")}`,
            },
          });
        },
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <Blog /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        element: (
          <AdminPrivetRoute>
            <AllUsers />
          </AdminPrivetRoute>
        ),
      },
      {
        path: "/dashboard/reported-items",
        element: (
          <AdminPrivetRoute>
            <ReportedItems />
          </AdminPrivetRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SealerPrivetRoute>
            <AddProduct />
          </SealerPrivetRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SealerPrivetRoute>
            <MyProducts />
          </SealerPrivetRoute>
        ),
      },
      {
        path: "/dashboard/my-buyers",
        loader: () =>
          fetch(`${serverUrl}/my-all-buyers`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("access_Token")}`,
            },
          }),
        element: (
          <SealerPrivetRoute>
            <MyBuyers />
          </SealerPrivetRoute>
        ),
      },

      {
        path: "/dashboard/my-orders",
        element: (
          <UserPrivetRoute>
            <MyOrders />
          </UserPrivetRoute>
        ),
      },
      {
        path: "/dashboard/my-wishlist",
        element: (
          <UserPrivetRoute>
            <MyWishList />
          </UserPrivetRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`${serverUrl}/dashboard/payment/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("access_Token")}`,
            },
          }),
        element: (
          <UserPrivetRoute>
            <Payment />
          </UserPrivetRoute>
        ),
      },
    ],
  },
]);
