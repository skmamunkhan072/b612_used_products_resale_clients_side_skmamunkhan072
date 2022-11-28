import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import CategoryButtonGrop from "./CategoryButtonGrop";

const AllCategory = () => {
  // category server data load function
  // const { data: CategoryCardData = [], isLoading } = useQuery({
  //   queryKey: ["/category-products/:id", category],
  //   queryFn: async () => {
  //     const res = await fetch(`${serverUrl}/category-products/${category}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `bearer ${localStorage.getItem("access_Token")}`,
  //       },
  //     });
  //     const data = await res.json();
  //     // console.log(data);
  //     return data;
  //   },
  // });
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <SectionTitle title="Shop By Category" />
      <CategoryButtonGrop />
    </div>
  );
};

export default AllCategory;
