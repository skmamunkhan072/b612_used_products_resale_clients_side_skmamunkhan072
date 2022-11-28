import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import UserOrderDataTableBody from "../../Share/UserOrderDataTable/UserOrderDataTableBody";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  const { data: mybooklistData = [] } = useQuery({
    queryKey: ["/my-booking-products", user],
    queryFn: async () => {
      const res = await fetch(
        `${serverUrl}/my-booking-products?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem("access_Token")}`,
          },
        }
      );
      const data = await res.json();
      console.log();
      return data;
    },
  });
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All WishList"} />
      </div>
      <UserOrderDataTableBody mybooklistData={mybooklistData} />
    </section>
  );
};

export default MyWishList;
