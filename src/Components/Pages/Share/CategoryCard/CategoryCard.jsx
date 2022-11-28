import React from "react";
import { BsCheckCircle, BsArrowRight } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CategoryCard = ({ cardInfo, BookNow, setBookNowItemId }) => {
  const details = cardInfo?.details.slice(0, 40);

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:flex sm:h-64 justify-start items-start">
        <img
          className="sm:w-[250px] sm:h-[100%] sm:rounded-l-lg"
          src={
            cardInfo?.productImageUrl
              ? cardInfo?.productImageUrl
              : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          }
          alt=""
        />
        <div className="px-5 py-2 text-start w-[100%] relative">
          <p className="absolute top-2 right-5">{cardInfo.postTime}</p>
          <h1 className="text-2xl font-medium mt-1">{cardInfo.title}</h1>
          <div className="font-medium">
            <p>location : {cardInfo.location}</p>
            <p>has been used : {cardInfo.hasBeenUsed}</p>
            <p>
              original price :
              <strong className="ml-2">$ {cardInfo.originalPrice}</strong>
            </p>
            <p>
              resale price :
              <strong className="ml-2">$ {cardInfo.resalePrice}</strong>
            </p>

            <div className="flex justify-between items-center">
              <p>seller's name : {cardInfo.name}</p>
              <span className="p-1 rounded-full ">
                {cardInfo?.sellersVerify ? (
                  <BsCheckCircle className="text-green-600" />
                ) : (
                  <AiOutlineCloseCircle className="text-red-600 text-lg" />
                )}
              </span>
            </div>
            <p>{details}</p>
          </div>
        </div>
      </div>
      {BookNow ? (
        <label
          onClick={() => setBookNowItemId(cardInfo?._id)}
          className="absolute btn btn-sm bottom-4 right-6  flex justify-center items-center"
          htmlFor="booking_modal"
        >
          Book now
          <BsArrowRight className="ml-2 text-xl" />
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default CategoryCard;
