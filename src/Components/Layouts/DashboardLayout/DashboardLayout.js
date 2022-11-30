import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "./DashboardLayout.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import toast from "react-hot-toast";

const DashboardLayout = () => {
  const { dataBaseUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // user sing out
  const handelSingOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("access_Token");
        toast.success("singOut is successfully");
        navigate("/login");
      })
      .catch((err) => {});
  };

  const dashboardMenu = (
    <>
      <li className="mb-2">
        <Link to="/">Home</Link>
      </li>
      {dataBaseUser?.selectedRole === "admin" && (
        <>
          <li className="mb-2">
            <Link to="/dashboard">All Users</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/reported-items">Reported Items</Link>
          </li>
        </>
      )}
      {dataBaseUser?.selectedRole === "sealer" && (
        <>
          <li className="mb-2">
            <Link to="/dashboard/add-product">Add Product</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/my-products">My Products</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/my-buyers">My Buyers</Link>
          </li>
        </>
      )}
      {dataBaseUser?.selectedRole === "user" && (
        <>
          <li className="mb-2">
            <Link to="/dashboard/my-orders">My Orders</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/my-wishlist">My WishList</Link>
          </li>
        </>
      )}
      <li onClick={handelSingOut} className="mb-2">
        <span>Sing Out</span>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer drawer-end drawer-mobile">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div id="drawer_content_wraper" className="drawer-content">
          <div className="lg:hidden block flex justify-end items-center">
            <label htmlFor="my-drawer-4" className="mr-20 mt-5 mb-10">
              <AiOutlineBars className="text-2xl" />
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 pt-16 w-80 bg-base-300 text-base-content relative	">
            <div className="lg:hidden block flex justify-end items-center absolute top-0">
              <label htmlFor="my-drawer-4" className="mr-20 mt-5">
                <IoMdClose className="text-3xl text-white" />
              </label>
            </div>
            {dashboardMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
