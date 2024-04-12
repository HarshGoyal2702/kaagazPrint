// // import React from "react";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import unDraw from "../../assets/undraw.svg";
// import ContactUs from "./contactus";
// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer p-10 bg-base-200 sm:gap-9 flex text-base-content md:flex flex-col  ">
//         <div className=" display  overflow-hidden justify-center flex flex-wrap">
//           <nav>
//             <h6 className="footer-title">Services</h6>
//             <a className="link link-hover">Branding</a>
//             <a className="link link-hover">Design</a>
//             <a className="link link-hover">Marketing</a>
//             <a className="link link-hover">Advertisement</a>
//           </nav>
//           <nav>
//             <h6 className="footer-title">Company</h6>
//             <a className="link link-hover">About us</a>
//             <a className="link link-hover">Contact</a>
//             <a className="link link-hover">Jobs</a>
//             <a className="link link-hover">Press kit</a>
//           </nav>
//           <nav>
//             <h6 className="footer-title">Legal</h6>
//             <a className="link link-hover">Terms of use</a>
//             <a className="link link-hover">Privacy policy</a>
//             <a className="link link-hover">Cookie policy</a>
//           </nav>
//           {/* lottie animation of printing */}
//           <div>
//             <nav className="max-w-36">
//               <img src={unDraw} alt="" />
//             </nav>
//           </div>
//           <div><ContactUs /></div>
//         </div>
        
        
//       </footer>
//       <footer className="footer px-10 py-4 flex flex-col items-center border-t bg-base-200 text-base-content border-base-300">
//         <aside className="items-center grid-flow-col">
//           <img src={logo} alt="" />
//           <p>
//             KagazPrints <br />
//             Since 2013
//           </p>
//         </aside>
//         <nav className="md:place-self-center md:justify-self-end">
//           <div className="grid grid-flow-col gap-4 text-2xl">
//             <div className="icon-wrapper transition-all duration-300 transform hover:rotate-180">
//               <a
//                 href="#"
//                 className="icon-link inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform hover:rotate-180 hover:text-white hover:bg-blue-500 "
//               >
//                 <FaFacebookF />
//               </a>
//             </div>
//             <div className="icon-wrapper transition-all duration-300 transform hover:rotate-180">
//               <a
//                 href="#"
//                 className="icon-link inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform hover:rotate-180 hover:text-white hover:bg-pink-500"
//               >
//                 <FaInstagram />
//               </a>
//             </div>
//             <div className="icon-wrapper transition-all duration-300 transform hover:rotate-180">
//               <a
//                 href="#"
//                 className="icon-link inline-flex items-center justify-center w-12 h-12 rounded-full  transition-all duration-300 transform hover:rotate-180 hover:text-white hover:bg-black"
//               >
//                 <IoMdMail />
//               </a>
//             </div>
//           </div>
//         </nav>
//       </footer>
//     </div>
//   );
// };

// export default Footer;



import React from 'react'
import Logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-base-content">
  <aside>
{/* <img src={Logo} alt="" /> */} logo
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer
