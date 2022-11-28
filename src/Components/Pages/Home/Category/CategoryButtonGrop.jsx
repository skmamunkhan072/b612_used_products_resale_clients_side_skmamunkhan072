import { useQuery } from "@tanstack/react-query";
import React from "react";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import Loading from "../../Share/Loading/Loading";
import CategoryButton from "./CategoryButton";

const CategoryButtonGrop = () => {
  const { data: categorys = [], isLoading } = useQuery({
    queryKey: ["all-products-category"],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/all-products-category`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

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
