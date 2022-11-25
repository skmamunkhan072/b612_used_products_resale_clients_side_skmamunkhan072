import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Navbar from "../Pages/Share/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="bg-gray-800 sticky top-0 left-0 z-[99]">
        {/* <Navbar /> */}
      </div>
      <div className="max-w-[1400px] mx-auto">
        <Outlet />
      </div>
      <div className="bg-base-200">{/* <Footer /> */}</div>
    </div>
  );
};

export default DashboardLayout;
