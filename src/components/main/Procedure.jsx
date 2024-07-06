import React from "react";
import Phoneimg from "../sub/Phoneimg";
import {FaSearch} from "react-icons/fa"

export default function Procedure() {
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="w-full container  p-10 pt-7 bg-white md:text-wrap  flex flex-col md:flex-row items-center justify-evenly ">
        <div className="left flex flex-col">
          <div className="mt-5 text-3xl text-black font-semibold">
            Just get your Prints in 4 simple steps
          </div>
          <div className="mt-3 text-left text-slate-600">
            You just have to simply upload a document in our application and you
            will
            <div className="font-medium text-slate-700 mt-3 mb-2">
              Step 1 : Download our application
            </div>
            <div className="font-medium text-slate-700 mt-3 mb-2">
              Step 2 : Upload your documents in any format like .pdf etc.
            </div>
            <div className="font-medium text-slate-700 mt-3 mb-2">
              Step 3 : Select your pages and prices
            </div>
            <div className="font-medium text-slate-700 mt-3 mb-2">
              Step 4 : Pay with upi or bank
            </div>
          </div>
        </div>
        {/* <div className="right flex flex-row ">
          <div className=" w-full relative mt-20 pl-7  pr-32 flex flex-grow justify-center align-middle">
            <Phoneimg />
          </div>

          <div className=" h-20 w-40  align-content-center">
          
          <img src={Women} alt="women" height={10} width={60} />
        </div>
        </div> */}
        <div className="right mt-7">
          <div className="mockup-phone">
            {/* <div className="camera"></div> */}
            <div className="display h-[610px] w-[290px] ">

              <div className="artboard relative artboard-demo phone-1 object-cover w-[100%] h-[100%] mt-9 pr-7 ">
                <div className="mockup-browser border bg-slate-400">

                </div>
                {/* <video src={video} autoPlay loop muted></video> */}
                <div className="mockup-browser absolute top-5 left-1 bg-base-300  border w-[100%]">
                  <div className="mockup-browser border-r-8 w-[90%]">
                    <div className="input h-8 flex gap-2 items-center"><FaSearch/>https://kaagazprint.com</div>
                  </div>
                </div>
                <Phoneimg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
