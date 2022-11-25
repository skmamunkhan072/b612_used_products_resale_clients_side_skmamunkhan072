import React from "react";
import { BsCheckCircle, BsArrowRight } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

const CategoryCard = () => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:flex sm:h-60 justify-start items-start">
        <img
          className="sm:w-[250px] sm:h-[100%] sm:rounded-l-lg"
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          alt=""
        />
        <div className="px-5 py-6 text-start w-[100%] relative">
          <p className="absolute top-2 right-5">12/2/2022</p>
          <h1 className="text-2xl font-medium mt-1">
            Lorem ipsum dolor sit amet,
          </h1>
          <div className="font-medium">
            <p>location : Dhaka, Bangladash</p>
            <p>years of use : 2year</p>
            <p>
              resale price : <strong className="ml-2">$500Tk</strong>
            </p>
            <p>
              original price : <strong className="ml-2">$100Tk</strong>
            </p>
            <div className="flex justify-between items-center">
              <p>seller's name : Mamun</p>
              <span className="p-1 rounded-full ">
                <BsCheckCircle className="text-green-600" />
                {/* <AiFillCheckCircle className="text-green-600 text-lg" /> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute btn btn-sm bottom-4 right-6  flex justify-center items-center">
        Book now
        <BsArrowRight className="ml-2 text-xl" />
      </button>
    </div>
  );
};

export default CategoryCard;
