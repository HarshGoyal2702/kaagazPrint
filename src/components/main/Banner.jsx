import { FaDownload } from "react-icons/fa6";
import print3 from "../../assets/home-printer-based-toner.jpg";
import Typewriter from "typewriter-effect";


const Banner = () => {
  return (
    <div className="  bg-[#fff]  h-auto md:text-wrap w-screen border-b-2 flex flex-col md:flex-row items-center justify-between  p-14  pt-32 md:p-36">
      <div
        className="left flex flex-col md:font-light w-full md:w-[50%]"
      >
        <div
          className="w-60 bg-white shadow-md h-10  md:text-justify font-semibold object-fit  rounded-full text-center flex items-center justify-center gap-1 text-black"
        >
          <span className="text-center text-2xl font-bold text-red-400">_</span>{" "}
          Digital Printing Services
        </div>
        <div className="text text-4xl flex flex-col md:text-7xl mt-7 capitalize font-semibold text-black">
          <h1>Print Documents </h1>
          <h1>
            <Typewriter
              options={{
                strings: ["Anytime", "Anywhere"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div>
          <p className="mt-7 md:ml-4 text-base md:text-lg text-black">
            Print Documents Anytime, Anywhere
            <br />
            Delivering quality and affordability.
          </p>
        </div>
        <div className="relative mt-16 w-60 cursor-pointer ">
          <div className="upper flex gap-3 w-52  md:w-60 text-[2.5vh] font-semibold bg-white rounded-full text-center items-center justify-center text-black mb-2 -mt-10 md:mt-6">
            Start Printing <FaDownload />
          </div>
          <div className="lower hover:scale-50  bg-purple-500  rounded-full -z-10 w-[100%]">
            {" "}
          </div>
        </div>
      </div>
      <div className=" w-full md:w-[50%]  md:mb-7  md:mt-0">
        <div className=" w-full  relative flex items-center justify-center">
          <img
            src={print3}
            className="min-w-[12rem] md:min-w-72 border-8 shadow-lg object-fit border-white"
            alt="Print Example"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
