import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import Loading from "../../Share/Loading/Loading";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import MyProductsCard from "./MyProductsCard";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: myProductInfo, isLoading } = useQuery({
    queryKey: ["my-products", user],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/my-products?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  console.log(myProductInfo);
  if (loading || isLoading) {
    return <Loading />;
  }
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
