import React from "react";
import logo from "../../assets/kaagaz_logo.jpg";
import { useState } from "react";


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
      <div className=" bg-gray-800 navbar fixed top-0  left-0 w-full display  shadow-md px-6 w-screen  overflow-hidden  ">
        <div className="navbar-start ">
          <img className="w-12 logo_image" src={logo} alt="logo" />
          <a className="btn btn-ghost text-xl text-white hover:text-purple-600 hover:bg-gray-800">
            KaagazPrints
          </a>
        </div>
        <div className="navbar-center hidden lg:flex items-center ">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <a className="text-white hover:bg-purple-700 hover:text-white">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a className="text-white  hover:bg-purple-700 ">About Us</a>
              {/* <details>
          <summary className=" text-white hover:bg-purple-700 hover:text-white">Benefits</summary>
          <ul className=" p-2">
            <li className=" hover:bg-purple-700 hover:text-white rounded-md"><a>Educational Purposes</a></li>
            <li className="hover:bg-purple-700 hover:text-white rounded-md"><a>Industrial Purposes</a></li>
            <li className="hover:bg-purple-700 hover:text-white rounded-md"><a>Personal Purposes</a></li>
          </ul>
        </details> */}
            </li>
            <li>
              <a className=" text-white hover:bg-purple-700 hover:text-white ">
                Services{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end justify-end">
          <div className="navbar-end hidden lg:flex items-center">
            <a className="btn  border-purple-400 bg-purple-700 text-white  hover:text-white  hover:bg-purple-500 shadow-slate-500 text-lg ">
              Contact Us
            </a>
          </div>
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={toggleSidebar}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* <div className="text-white text-xl"> <img className="w-12 logo_image" src={logo} alt="logo" /></div> */}
          {/* Additional Navbar items can be placed here */}
          {/* <Sidebar isOpen={isOpen} /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
