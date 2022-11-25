import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import MyProductsCard from "./MyProductsCard";

const MyProducts = () => {
  const myProductInfo = [
    {
      _id: 1,
      title: "dell lapto",
      location: "Dhaka, Bangladash",
      hasBeenUsed: "2year",
      originalPrice: "100Tk",
      sellersName: "mamun",
      sellersVerify: true,
      resalePrice: 5000,
      originalPrice: 10000,
      postTime: "12/2/2022",
    },
    {
      _id: 2,
      title: "Hp lapto",
      location: "Dhaka, Bangladash",
      hasBeenUsed: "2year",
      originalPrice: "100Tk",
      sellersName: "mamun",
      sellersVerify: true,
      resalePrice: 5000,
      originalPrice: 10000,
      postTime: "12/2/2022",
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
      originalPrice: 10000,
      postTime: "12/2/2022",
    },
    {
      _id: 4,
      title: "Acer lapto",
      location: "Dhaka, Bangladash",
      hasBeenUsed: "2year",
      originalPrice: "100Tk",
      sellersName: "mamun",
      sellersVerify: true,
      resalePrice: 5000,
      originalPrice: 10000,
      postTime: "12/2/2022",
    },
  ];
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All Products"} />
      </div>
      <div className="px-10">
        {myProductInfo.map((product) => (
          <MyProductsCard key={product._id} myProductInfo={product} />
        ))}
      </div>
    </section>
  );
};

export default MyProducts;
