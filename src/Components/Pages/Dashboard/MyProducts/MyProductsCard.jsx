import React from "react";
import { BsCheckCircle, BsArrowRight } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyProductsCard = ({ myProductInfo, refetch }) => {
  const navigate = useNavigate("/");
  const handelAdvertisedItems = (id) => {
    fetch(`${serverUrl}/my-products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          refetch();
          navigate("/advertised-items");
        }
      });
  };
  // handel product delete
  const handelDeleteProduct = (id) => {
    fetch(`${serverUrl}/my-products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
          toast.success("your products is delete");
        }
      });
  };
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
      <div className="sm:flex sm:h-60 justify-start items-start">
        <img
          className="sm:w-[250px] sm:h-[100%] sm:rounded-l-lg"
          src={
            myProductInfo?.productImageUrl
              ? myProductInfo?.productImageUrl
              : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          }
          alt=""
        />
        <div className="px-5 py-6 text-start w-[100%] relative">
          <p className="absolute top-2 right-5">{myProductInfo?.postTime}</p>
          <h1 className="text-2xl font-medium mt-1">{myProductInfo?.title}</h1>
          <div className="font-medium">
            <p>location : {myProductInfo?.location}</p>
            <p>has been used : {myProductInfo?.hasBeenUsed}</p>
            <p>
              resale price :
              <strong className="ml-2">$ {myProductInfo?.resalePrice}</strong>
            </p>
            <p>
              original price :
              <strong className="ml-2">$ {myProductInfo.originalPrice}</strong>
            </p>
            <div className="flex justify-between items-center">
              <p>seller's name : {myProductInfo?.email}</p>
              <span className="p-1 rounded-full ">
                {myProductInfo?.sellersVerify ? (
                  <BsCheckCircle className="text-green-600" />
                ) : (
                  <AiOutlineCloseCircle className="text-red-600 text-lg" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      {myProductInfo && (
        <div className="absolute  bottom-4 right-6  flex justify-center items-center">
          <button
            onClick={() => handelDeleteProduct(myProductInfo?._id)}
            className="btn btn-sm"
          >
            Delete
            <AiOutlineCloseCircle className="text-red-600 text-lg ml-3" />
          </button>
          {!myProductInfo?.advertised && (
            <label
              className="btn btn-sm ml-3"
              onClick={() => handelAdvertisedItems(myProductInfo?._id)}
              htmlFor="booking_modal"
            >
              Advertised items
              <BsArrowRight className="ml-2 text-xl" />
            </label>
          )}
        </div>
      )}
    </div>
  );
};

export default MyProductsCard;
