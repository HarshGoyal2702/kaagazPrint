// // import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import React from "react";
import Logo from "../../assets/logo.png";
import payments from "../../assets/payment/visa.png";
import footer from "../../assets/payment/printing-2.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-#6757a6">
      <footer className="footer p-10 text-gray-400 cursor-pointer  bg-#025286 ">
        <aside className="leading-none">
          <img src={Logo} alt="logo" className="w-14 h-14 rounded-lg " />
          <p className="hover:text-gray-800 mt-2 ">Kaagazprint</p>
          <p className="hover:text-gray-800">Make Prints Easy</p>
          <nav className="mt-2">
            <div className="grid grid-flow-col gap-2  text-2xl">
              <div className="icon-wrapper transition-all duration-300 transform hover:rotate-180">
                <a
                  href="#"
                  className="icon-link inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 transform hover:rotate-180 hover:text-white hover:bg-blue-500 "
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="icon-wrapper transition-all duration-300 transform hover:rotate-180">
                <a
                  href="#"
                  className="icon-link inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 transform hover:rotate-180 hover:text-white hover:bg-pink-500"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="icon-wrapper transition-all duration-300 transform hover:rotate-180">
                <a
                  href="#"
                  className="icon-link inline-flex items-center justify-center w-8 h-8 rounded-full  transition-all duration-300 transform hover:rotate-180 hover:text-white hover:bg-black"
                >
                  <IoMdMail />
                </a>
              </div>
            </div>
          </nav>
        </aside>
        <nav className="transition-all duration-[0.5] ease-linear ">
          <h6 className="footer-title hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Services
          </h6>
          <a className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Branding
          </a>
          <a className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Design
          </a>
          <a className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Marketing
          </a>
          <a className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="footer-title hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Company
          </h6>
          <a href="/terms" className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            About us
          </a>
          <a className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Contact
          </a>
          <a className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Jobs
          </a>
          <a className="link link-hover hover:text-gray-800 transition-all duration-[0.5] ease-linear">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="footer-title hover:text-gray-800 transition-all duration-[0.3] ease-linear">
            Legal
          </h6>
          <Link
            to="/terms"
            className="link link-hover hover:text-gray-800 transition-all duration-[1] ease-linear"
          >
            Terms of use
          </Link>
          <Link
            to="/terms"
            className="link link-hover hover:text-gray-800 transition-all duration-[1] ease-linear"
          >
            Privacy of use
          </Link>
          <a
            href="/terms"
            className="link link-hover hover:text-gray-800 transition-all duration-[1] ease-linear"
          >
            Cookie policy
          </a>
        </nav>
        <div>
          <form>
            <h6 className="footer-title hover:text-gray-800 transition-all duration-[0.3] ease-linear">
              Newsletter
            </h6>
            <fieldset className="form-control w-72">
              <label className="label">
                <span className="label-text text-gray-400">
                  Enter your email address
                </span>
              </label>
              <div className="join -mr-5">
                <input
                  type="text"
                  placeholder="username@gmail.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Ask Query</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
      <div className="flex  flex-col md:justify-around md:flex-row pr-4 pb-3 mt-0">
        <div className="flex flex-col max-w-full items-center">
          <img src={footer} className="w-80" alt="svg" />
          <h1 className="text-white text-3xl font-bold ml-4">
            Deliver On Time.
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.01585229205!2d76.57098154355772!3d28.89811255208279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85bae20eea97%3A0x7d48228e0886ba26!2sUpasana%20Stationery%20%26%20Photostat!5e0!3m2!1sen!2sin!4v1713256499785!5m2!1sen!2sin"
          width="300"
          height="170"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="m-9"
        ></iframe>
        <p className="font-semibold hover:underline">Pick Up Point</p>
        </div>
        
      </div>
      <hr className=" opacity-5" />
      <div className="p-6 grid sm:grid-cols-2 grid-rows-2 justify-between items-center">
        <h2 className="text-black">
          © 2024 Powered by KaagazPrints . All Rights Reserved.
        </h2>
        <img src={payments} alt="payments" className="mr-4 mt-2" />
      </div>
    </div>
  );
};

export default Footer;
