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
      <div className=" bg-gray-800 navbar fixed top-0  left-0 w-full display  shadow-md px-6  overflow-hidden z-50">
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
          <div className="drawer drawer-end md:hidden justify-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Menu</label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <ul >
                  <li>
                    <a className="">
                      Home
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="">About Us</a>
                  </li>
                  <li>
                    <a className="">
                      Services{" "}
                    </a>
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
