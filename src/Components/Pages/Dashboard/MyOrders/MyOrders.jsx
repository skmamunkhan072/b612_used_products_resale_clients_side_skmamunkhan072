import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import Loading from "../../Share/Loading/Loading";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import UserOrderDataTableBody from "../../Share/UserOrderDataTable/UserOrderDataTableBody";

const MyOrders = () => {
  const { data: mybooklistData = [], refetch } = useQuery({
    queryKey: ["my-orders"],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/my-orders`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("access_Token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All Orders"} />
      </div>
      <UserOrderDataTableBody
        mybooklistData={mybooklistData}
        refetch={refetch}
      />
    </section>
  );
};

export default MyOrders;
