import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../Share/CategoryCard/CategoryCard";
import Modal from "../../Share/Modal/Modal";

const Category = () => {
  const CategoryCardData = useLoaderData();
  const [bookNowItemId, setBookNowItemId] = useState("");
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-2 px-10 py-10">
        {CategoryCardData.map((categoryInfo) => (
          <CategoryCard
            key={categoryInfo._id}
            cardInfo={categoryInfo}
            BookNow={true}
            setBookNowItemId={setBookNowItemId}
          />
        ))}
      </div>
      <div>
        <Modal bookNowItemID={bookNowItemId} />
      </div>
    </div>
  );
};

export default Category;
