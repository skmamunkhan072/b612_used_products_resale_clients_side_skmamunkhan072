import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // console.log(user);

  const handelSingOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {});
  };
  const navBarMemu = (
    <>
      <li className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
        <Link to="/">Home</Link>
      </li>
      <li className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
        <Link to="/">Home</Link>
      </li>
      <li className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {user ? (
        <li className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
          <button onClick={handelSingOut}>sing out</button>
        </li>
      ) : (
        <>
          <li className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
            <Link to="/login">login</Link>
          </li>
          <li className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">
            <Link to="/singup">Sing In</Link>
          </li>
        </>
      )}
    </>
  );

  // user profile handel function
  const handelProfile = () => {};
  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800 max-w-[1400px] mx-auto">
        <div className="container px-6 py-3 md:flex mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              >
                laptops second
              </Link>
            </div>

            <div className="flex md:hidden ">
              {isOpen ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <AiOutlineBars className="text-2xl" />
                </button>
              )}
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 ml-auto px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-end`}
          >
            <ul className="md:flex justify-center items-center flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
              {navBarMemu}
            </ul>
            <div className="avatar">
              <div
                onClick={handelProfile}
                className="w-10 cursor-pointer	 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <img src="https://placeimg.com/192/192/people" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
