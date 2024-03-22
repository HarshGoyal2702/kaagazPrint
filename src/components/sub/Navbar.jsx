import React from "react";
import logo from "../../assets/vite.svg"
const Navbar = () => {
  return <>
    <div className="navbar  bg-white shadow-md px-5  ">
  <div className="navbar-start">
  <img src={logo} alt="" />
    <a className="btn btn-ghost text-xl hover:text-purple-600">KagazPrints</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
      <li><a className="hover:bg-purple-700 hover:text-white">Home</a></li>
      <li>
        <details>
          <summary className="hover:bg-purple-700 hover:text-white">Benefits</summary>
          <ul className=" p-2">
            <li className="hover:bg-purple-700 hover:text-white rounded-md"><a>Educational Purposes</a></li>
            <li className="hover:bg-purple-700 hover:text-white rounded-md"><a>Industrial Purposes</a></li>
            <li className="hover:bg-purple-700 hover:text-white rounded-md"><a>Personal Purposes</a></li>
          </ul>
        </details>
      </li>
      <li><a className="hover:bg-purple-700 hover:text-white">About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn border-purple-400 hover:bg-purple-700 hover:text-white">Contact Us</a>
  </div>
</div>
  </>;
};

export default Navbar;
