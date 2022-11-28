import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import UserOrderDataTableBody from "../../Share/UserOrderDataTable/UserOrderDataTableBody";

const MyOrders = () => {
  const mybooklistData = useLoaderData([]);

  const { loading } = useContext(AuthContext);
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All Orders"} />
      </div>
      <UserOrderDataTableBody mybooklistData={mybooklistData} />
    </section>
  );
};

export default MyOrders;
