import React from "react";
import { BsCheckCircle, BsArrowRight } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import toast from "react-hot-toast";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";

const CategoryCard = ({ cardInfo, BookNow, setBookNowItemId, refetch }) => {
  const { dataBaseUser } = useContext(AuthContext);
  const details = cardInfo?.details.slice(0, 40);
  // repot items product repot to admin function
  const handelRepotItems = (id) => {
    console.log(id);
    fetch(`${serverUrl}/repot-item`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your Repot is successful");
        }
      });
  };

  // Delete repoded item
  const handelRepotedItemDelete = (id) => {
    fetch(`${serverUrl}/repot-items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Your Repoted item Deleted successful");
        }
      });
  };
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:flex sm:h-60 justify-start items-start">
        <div className="flex justify-start items-center h-[100%]">
          <img
            className="sm:w-[300px] sm:h-[10rem] sm:rounded-lg"
            src={
              cardInfo?.productImageUrl
                ? cardInfo?.productImageUrl
                : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            }
            alt=""
          />
        </div>
        <div className="px-5 py-2 text-start w-[100%] relative">
          <p className="absolute top-2 right-5">{cardInfo?.postDate}</p>
          <h1 className="text-2xl font-medium mt-1">{cardInfo?.title}</h1>
          <div className="font-medium">
            <p>location : {cardInfo?.location}</p>
            <p>has been used : {cardInfo?.hasBeenUsed}</p>
            <p>
              original price :
              <strong className="ml-2">$ {cardInfo?.originalPrice}</strong>
            </p>
            <p>
              resale price :
              <strong className="ml-2">$ {cardInfo?.resalePrice}</strong>
            </p>
            <p>seller's name : {cardInfo?.name}</p>

            <div className="flex justify-between items-center">
              <p>seller's name : {cardInfo?.email}</p>
              <span className="p-1 rounded-full ">
                {cardInfo?.sellersVerify && (
                  <BsCheckCircle className="text-green-600" />
                )}
                {!cardInfo?.sellersVerify && (
                  <AiOutlineCloseCircle className="text-red-600 text-lg" />
                )}
              </span>
            </div>
            <p>{details}</p>
          </div>
        </div>
      </div>
      {dataBaseUser && dataBaseUser?.selectedRole === "user" && (
        <>
          {BookNow && (
            <div className="flex justify-between items-center px-5 my-3">
              <button
                onClick={() => handelRepotItems(cardInfo?._id)}
                className="btn btn-sm"
              >
                repot
                <AiOutlineCloseCircle className="text-red-600 text-lg ml-2" />
              </button>

              <label
                onClick={() => setBookNowItemId(cardInfo?._id)}
                className="btn btn-sm"
                htmlFor="booking_modal"
              >
                Book no
                <BsArrowRight className="ml-2 text-xl" />
              </label>
            </div>
          )}
        </>
      )}
      {cardInfo?.productRepot && dataBaseUser?.selectedRole === "admin" && (
        <div className="flex justify-end items-center px-5 my-3">
          <button
            onClick={() => handelRepotedItemDelete(cardInfo?._id)}
            className="btn btn-sm"
          >
            Delete
            <AiOutlineCloseCircle className="text-red-600 text-lg ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
