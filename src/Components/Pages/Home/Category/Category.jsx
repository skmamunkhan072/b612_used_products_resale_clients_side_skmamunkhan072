import React from "react";
import CategoryButtonGrop from "./CategoryButtonGrop";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";

const Category = () => {
  const CategoryCardData = [
    {
      _id: 1,
      title: "dell lapto",
      location: "Dhaka, Bangladash",
      hasBeenUsed: "2year",
      originalPrice: "100Tk",
      sellersName: "mamun",
      sellersVerify: true,
      resalePrice: 5000,
      postTime: "12-2-2022",
    },
    {
      _id: 2,
      title: "Hp lapto",
      location: "Dhaka, Bangladash",
      hasBeenUsed: "2year",
      originalPrice: "100Tk",
      resalePrice: "5000Tk",
      sellersName: "mamun",
      sellersVerify: true,
      postTime: "12/2/2022",
      descripTion: "discription",
    },
    {
      _id: 3,
      title: "Acer lapto",
      location: "Dhaka, Bangladash",
      hasBeenUsed: "2year",
      originalPrice: "100Tk",
      sellersName: "mamun",
      sellersVerify: true,
      resalePrice: 5000,
      postTime: "12/2/2022",
      descripTion: "discription",
    },
  ];

  //category get id function adn data fetch
  const handelCategory = (id) => {
    fetch(`${serverUrl}/all-products-category/?categoryId=${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <SectionTitle title="Shop By Category" />
      <CategoryButtonGrop handelCategory={handelCategory} />
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-2 px-10 py-10">
        {CategoryCardData.map((categoryInfo) => (
          <CategoryCard key={categoryInfo._id} categoryInfo={categoryInfo} />
        ))}
      </div>
      <div>{/* <Modal /> */}</div>
    </div>
  );
};

export default Category;
