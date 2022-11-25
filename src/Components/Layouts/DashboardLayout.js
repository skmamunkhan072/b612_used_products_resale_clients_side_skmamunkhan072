import React from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

const DashboardLayout = () => {
  const dashboardMenu = (
    <>
      <label htmlFor="my-drawer-4">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </label>
    </>
  );
  return (
    <div>
      <div className="drawer drawer-end drawer-mobile">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:pt-10">
          <div className="lg:hidden block flex justify-end items-center">
            <label htmlFor="my-drawer-4" className="mr-20 mt-5">
              <AiOutlineBars className="text-3xl" />
            </label>
          </div>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 pt-16 w-80 bg-base-300 text-base-content relative	">
            <div className="lg:hidden block flex justify-end items-center absolute top-0">
              <label htmlFor="my-drawer-4" className="mr-20 mt-5">
                <AiOutlineBars className="text-2xl" />
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
