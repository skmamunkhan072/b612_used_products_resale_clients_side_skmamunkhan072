import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryCard from "../../Share/CategoryCard/CategoryCard";
import Modal from "../../Share/Modal/Modal";

const Category = () => {
  const CategoryCardData = useLoaderData();
  const [bookNowItemId, setBookNowItemId] = useState("");
  const [bookingDataInfo, setBookingDataInfo] = useState({});

  return (
    <div>
      {CategoryCardData?.length === 0 ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div>
            <h1 className="text-4xl text-center mb-5">No Data found</h1>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 xl:grid-cols-2 px-10 py-10">
          {CategoryCardData?.map((categoryInfo) => (
            <CategoryCard
              key={categoryInfo._id}
              cardInfo={categoryInfo}
              BookNow={true}
              setBookNowItemId={setBookNowItemId}
            />
          ))}
        </div>
      )}

      <div>
        <Modal
          bookNowItemID={bookNowItemId}
          bookingDataInfo={bookingDataInfo}
          setBookingDataInfo={setBookingDataInfo}
        />
      </div>
    </div>
  );
};

export default Category;
