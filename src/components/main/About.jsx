import React from "react";


const About = () => {
  return (
    <div className="w-full h-screen  flex-row   justify-between p-10  bg-white md: flex flex-col flex-wrap">
      <div className="left w-[50%]  md: hidden ">{/* images */}</div>
      <div className=" right w-[50%] flex  gap-5 mt-8 md:flex flex-col items-center    ">
        <div className="w-60 h-9 text-[2.5vh] md:text-sm font-bold bg-white rounded-full text-center flex items-center justify-center gap-1 text-black">
          {/* <span className="text-center text-2xl font-bold text-red-400"></span>{" "} */}
          Company Details
        </div>
        <div className="flex container flex-col gap-5 justify-between items-center md: w-full h">
          <p className="font-sans font-semibold text- mt-3 text-black">
            We are a small business who deliver <br /> Best Quality Prints{" "}
            <br />
            with affordable prices and trust!!
          </p>
          <div className="w-full h-32 flex items-start flex-col justify-center rounded-2xl p-1 bg-white shadow-lg">
            <h1 className="text-black text-xl heading">Print</h1>
            <p>
              We are a small business who deliver Best Quality Prints with
              affordable prices and tr
            </p>
          </div>
          <div className="w-full h-32 md:ml-4 text-base md:text-lg flex items-start flex-col justify-center rounded-2xl p-1 bg-white shadow-lg">
            <h1 className="text-black text-xl heading">Print</h1>
            <p>
              We are a small business who deliver Best Quality Prints with
              affordable prices and tr
            </p>
          </div>
          <div className="w-full h-32 flex items-start flex-col justify-center rounded-2xl p-1 bg-white shadow-lg">
            <h1 className="text-black text-xl heading">Print</h1>
            <p>
              We are a small business who deliver Best Quality Prints with
              affordable prices and tr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
