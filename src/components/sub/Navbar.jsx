import React from "react";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  const Sidebar = () => {
    return (
      <div className="bg-gray-800 h-screen w-64 text-white">
        {/* Sidebar content goes here */}
      </div>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" bg-white navbar justify-between fixed top-0  left-0 w-screen display  shadow-md px-6  overflow-hidden z-50">
        <div className="navbar-start gap-2  ">
          <img className="md:w-12 w-7 good logo_image" src={logo} alt="logo" />
          <div className="flex md:max-w-[12vw] max-w-fit  overflow-hidden">
            {" "}
            <Link
              to="/"
              className="md:h-[4vh] h-[3.3vh] max-w-fit font-bold md:text-xl text-lg border-none  text-black bg-none"
            >
              KaagazPrints
            </Link>
          </div>
        </div>
        <div className="navbar-center justify-between hidden lg:flex items-center">
          <ul className=" menu-horizontal shadow-none px-1 gap-3 ">
            <li className=" overflow-hidden  flex items-center justify-center w-20 h-9 hover:font-bold ">
              <a className="text-black w-full hover:text-pink-600 hover:border-b-2 border-pink-600 ">
                Home
              </a>
            </li>
            <li className=" overflow-hidden w-20 h-9 flex items-center justify-center  hover:font-bold">
              {" "}
              <a className=" text-black w-full hover:text-pink-600 hover:border-b-2 border-pink-600 ">
                About Us
              </a>
            </li>
            <li className="overflow-hidden w-20 h-9 flex items-center justify-center  hover:font-bold">
              <a className=" text-black w-full hover:text-pink-600 hover:border-b-2 border-pink-600 ">
                Services{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end justify-end">
          <div className="navbar-end h-6 hidden lg:flex items-center">
            <Link
              to={"/"}
              className="btn h-5 text-center bg-pink-700 text-white  hover:text-white  hover:bg-pink-500 shadow-slate-500 text-lg "
            >
              Contact Us
            </Link>
          </div>
          <div className="drawer drawer-end md:hidden justify-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button text-xl text-white bg-none "
              >
                <FiMenu />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <ul>
                  <li>
                    <a className="">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a className="">About Us</a>
                  </li>
                  <li>
                    <a className="">Services </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
