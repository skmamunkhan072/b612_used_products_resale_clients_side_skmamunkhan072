import React, { useState } from "react";
import { useEffect } from "react";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import CategoryButton from "./CategoryButton";

const CategoryButtonGrop = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch(`${serverUrl}/all-products-category`)
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="flex items-center justify-center my-5">
      <div
        className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
        role="group"
      >
        {categorys.map((category) => (
          <CategoryButton key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryButtonGrop;
