import React from "react";
import CategoryButtonGrop from "./CategoryButtonGrop";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div>
      <SectionTitle title="Shop By Category" />
      <CategoryButtonGrop />
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-2 px-10 py-10">
        <CategoryCard />
      </div>
    </div>
  );
};

export default Category;
