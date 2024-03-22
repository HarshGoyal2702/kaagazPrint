import React, { useEffect } from "react";
import lottie from 'lottie-web'
const Hero = () => {
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container : container.current,
  //     renderer : 'svg',
  //     loop:true,
  //     autoplay :true,
  //     animationData : ""
  //   })
  // },[])
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          {/* <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20201105/pngtree-cartoon-flat-purple-gradient-express-delivery-background-image_451077.jpg"
            className="max-w-sm rounded-lg shadow-2xl hover:scale-110"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">Terms and Conditions</h1>
            <p className="py-6">
             Last Updated  on January 1, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
