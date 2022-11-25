import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Navbar from "../Pages/Share/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer drawer-end drawer-mobile">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-300 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
