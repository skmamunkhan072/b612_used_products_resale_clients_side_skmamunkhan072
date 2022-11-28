import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import CategoryCard from "../../Share/CategoryCard/CategoryCard";
import Loading from "../../Share/Loading/Loading";

const AdvertisedItems = () => {
  const { user, loading } = useContext(AuthContext);

  const {
    data: AdvertisedItems,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertised-items", user],
    queryFn: async () => {
      const res = await fetch(
        `${serverUrl}/advertised-items?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem("access_Token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  // loading
  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[600px]">
      {AdvertisedItems?.length === 0 ? (
        <div className="min-h-[600px] w-full flex justify-center items-center">
          <h1 className="text-3xl">No data found</h1>
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 xl:grid-cols-2 px-10 py-10">
          {AdvertisedItems.map((card) => (
            <CategoryCard key={card._id} cardInfo={card} BookNow={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvertisedItems;
