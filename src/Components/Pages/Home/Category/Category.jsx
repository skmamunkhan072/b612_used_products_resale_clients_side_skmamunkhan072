import React from "react";
import CategoryButtonGrop from "./CategoryButtonGrop";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import CategoryCard from "../../Share/CategoryCard/CategoryCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Share/Loading/Loading";
import Modal from "../../Share/Modal/Modal";

const Category = () => {
  const [category, setCategory] = useState("638139a2460053f52015df2a");
  const [bookNowItemID, setBookNowItemId] = useState("");

  //category get id function adn data fetch
  const handelCategory = (id) => {
    fetch(`${serverUrl}/all-products-category/?categoryId=${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCategory(data[0]._id));
  };

  // category server data load function
  const { data: CategoryCardData = [], isLoading } = useQuery({
    queryKey: ["/category-products/:id", category],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/category-products/${category}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("access_Token")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <SectionTitle title="Shop By Category" />
      <CategoryButtonGrop handelCategory={handelCategory} />
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
        <Modal bookNowItemID={bookNowItemID} />
      </div>
    </div>
  );
};

export default Category;
