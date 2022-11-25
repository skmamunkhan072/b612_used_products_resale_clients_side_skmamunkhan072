import React from "react";
import { BsCheckCircle, BsArrowRight } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

const CategoryCard = ({ categoryInfo }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:flex sm:h-60 justify-start items-start">
        <img
          className="sm:w-[250px] sm:h-[100%] sm:rounded-l-lg"
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          alt=""
        />
        <div className="px-5 py-6 text-start w-[100%] relative">
          <p className="absolute top-2 right-5">{categoryInfo.postTime}</p>
          <h1 className="text-2xl font-medium mt-1">{categoryInfo.title}</h1>
          <div className="font-medium">
            <p>location : {categoryInfo.location}</p>
            <p>has been used : {categoryInfo.hasBeenUsed}</p>
            <p>
              resale price :
              <strong className="ml-2">$ {categoryInfo.resalePrice}</strong>
            </p>
            <p>
              original price :
              <strong className="ml-2">$ {categoryInfo.originalPrice}</strong>
            </p>
            <div className="flex justify-between items-center">
              <p>seller's name : {categoryInfo.sellersName}</p>
              <span className="p-1 rounded-full ">
                <BsCheckCircle className="text-green-600" />
                {/* <AiFillCheckCircle className="text-green-600 text-lg" /> */}
              </span>
            </div>
          </div>
        </div>
      </div>

      <label
        className="absolute btn btn-sm bottom-4 right-6  flex justify-center items-center"
        htmlFor="booking_modal"
      >
        Book now
        <BsArrowRight className="ml-2 text-xl" />
      </label>
    </div>
  );
};

export default CategoryCard;
