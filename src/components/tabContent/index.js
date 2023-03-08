import React from "react";
import { Button } from "../";
const TabContent = ({ title, paragraph, icon, btn, img, condition }) => {
  return (
    <>
      {/* <div className="  "> */}
      <section className="grid lg:flex bg-transparent z-50 gap-28  grid-cols-1 tab-content max-h-[100vh]  relative lg:pt-44 max-w-[100vw] md:mt-20 mx-0 lg:mx-20  mt-16 lg:mt-1 ">
        <div className="order-2  lg:order-none">
          <h1 className="clash-700 mb-0  leading-[78px] text-[30px] sm:text-[40px]  md:text-[45px] lg:text-[60px]">
            {title}
          </h1>
          <p
            className={`${condition === "isFire" ? "fire-effect" : ""} ${
              condition === "isLeaf" ? "leaf-effect" : ""
            } ${condition === "isPsyhic" ? "psyhic-effect" : ""} ${
              condition === "isWater" ? "water-effect" : ""
            } ${
              condition === "isSky" ? "sky-effect" : ""
            } mb-5 lg:w-[700px] relative text-[16px]`}
          >
            {paragraph}
          </p>
          <Button icon={icon} title={btn} />
        </div>
        <div className="lg:max-w-[410px] sm:mt-1 md:mt-16 lg:mt-0 relative md:max-w-[335px] md:max-h-[524px] max-w-[240px] mx-auto h-[300px] lg:max-h-[600px] flex justify-center items-center">
          <div
            className={`lg:w-[300px]  md:w-[300px]  md:h-[300px] bottom-0 md:top-0 lg:bottom-0 w-[250px] h-[250px] lg:h-[300px]  absolute   -z-10  mt-10  mx-auto sm:rounded-[50px] rounded-[40px] lg:rounded-[81px] ${
              condition === "isFire" &&
              "bg-gradient-to-t from-orange-600 to-red-600"
            }
             ${
               condition === "isLeaf" &&
               "bg-gradient-to-t to-green-500 from-yellow-600"
             } 
             ${
               condition === "isPsyhic" &&
               "bg-gradient-to-t from-yellow-400 to-orange-500"
             } ${
              condition === "isWater" &&
              "bg-gradient-to-b from-indigo-400 to-orange-400"
            } ${
              condition === "isSky" &&
              "bg-gradient-to-b from-gray-400 to-yellow-300"
            }`}
          ></div>
          {!img ? (
            <div className="preloader">
              <div className="preloader-spinner"></div>
            </div>
          ) : (
            <img
              loading="lazy"
              className=" md:min-w-[300px] relative  xl:min-w-[300px]  z-30 mx-auto"
              src={img}
              alt=""
            />
          )}
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default TabContent;
