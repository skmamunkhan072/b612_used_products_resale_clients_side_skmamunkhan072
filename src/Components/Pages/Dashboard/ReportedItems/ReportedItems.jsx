import { useQuery } from "@tanstack/react-query";
import React from "react";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import CategoryCard from "../../Share/CategoryCard/CategoryCard";

const ReportedItems = () => {
  // all repodet items
  const { data: repotedItems = [], refetch } = useQuery({
    queryKey: ["/repot-items"],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/repot-items`, {
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
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-2 px-10 py-10">
        {repotedItems?.map((repotedItem) => (
          <CategoryCard
            key={repotedItem._id}
            cardInfo={repotedItem}
            BookNow={true}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportedItems;
