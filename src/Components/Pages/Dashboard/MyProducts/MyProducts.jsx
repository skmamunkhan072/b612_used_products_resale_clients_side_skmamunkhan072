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

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-products", user],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/my-products?email=${user?.email}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("access_Token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const sortProducts = myProducts.sort(
    (advertised, notAdvertised) =>
      Number(advertised.advertised) - Number(notAdvertised.advertised)
  );

  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All Products"} />
      </div>
      <div className="px-10">
        {sortProducts?.map((product) => (
          <MyProductsCard
            key={product._id}
            myProductInfo={product}
            refetch={refetch}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProducts;
