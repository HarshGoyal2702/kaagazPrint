import React from "react";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = ({ scrollToSection }) => {
  const handleClick = (id) => {
    scrollToSection(id);
  };
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
              KaagazPrint
            </Link>
          </div>
        </div>
        <div className="navbar-center justify-between hidden lg:flex items-center">
          <ul className=" menu-horizontal shadow-none px-1 gap-3 ">
            <li className=" overflow-hidden  flex items-center justify-center w-20 h-9 hover:font-bold ">
              <Link to="/" className="text-black w-text hover:text-pink-600 hover:border-b-2 border-pink-600 ">
                Home
              </Link>
            </li>
            <li className=" overflow-hidden w-20 h-9 flex items-center justify-center  hover:font-bold">
              {" "}
              <Link to="#about" onClick={() => handleClick('about')} className=" text-black w-text hover:text-pink-600 hover:border-b-2 border-pink-600 ">
                About Us
              </Link>
            </li>
            <li className="overflow-hidden w-20 h-9 flex items-center justify-center  hover:font-bold">
              <Link to="#process"  onClick={() => handleClick('process')} className=" text-black w-text hover:text-pink-600 hover:border-b-2 border-pink-600 ">
                Services{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end justify-end">
          <div className="navbar-end  hidden lg:flex items-center">
            <a href="tel:+91 9541979547"
              
              className="btn  text-center bg-pink-700 text-white  hover:text-white  hover:bg-pink-500 shadow-slate-500 b  "
            >
              Contact Us
            </a>
          </div>
          <div className="drawer drawer-end md:hidden justify-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle  " />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button text-xl text-black bg-none "
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
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-sm">
                {/* Sidebar content here */}
                <ul>
                  <li>
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#about" onClick={() => handleClick('about')}>About Us</Link>
                  </li>
                  <li>
                    <Link to="#process" onClick={() => handleClick('about')}>Services </Link>
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
