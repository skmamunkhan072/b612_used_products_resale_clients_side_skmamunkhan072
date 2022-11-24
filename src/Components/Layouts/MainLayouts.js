import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer/Footer";
import Navbar from "../Pages/Share/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <Navbar />
      </div>
      <div className="max-w-[1400px] mx-auto">
        <Outlet />
      </div>
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;
