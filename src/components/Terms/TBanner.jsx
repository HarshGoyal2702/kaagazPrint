import React, { useEffect } from "react";
const TBanner = () => {
  return (
    <div className="w-full h-screen">
      <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          {/* <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20201105/pngtree-cartoon-flat-purple-gradient-express-delivery-background-image_451077.jpg"
            className="max-w-sm rounded-lg shadow-2xl hover:scale-110"
          /> */}
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl font-bold text-center">Terms and Conditions</h1>
            <p className="py-6">
             Last Updated  on January 1, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TBanner;
