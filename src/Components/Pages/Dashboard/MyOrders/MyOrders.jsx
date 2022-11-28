import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import UserOrderDataTableBody from "../../Share/UserOrderDataTable/UserOrderDataTableBody";

const MyOrders = () => {
  const mybooklistDaat = [];
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All Orders"} />
      </div>
      <UserOrderDataTableBody mybooklistData={mybooklistDaat} />
    </section>
  );
};

export default MyOrders;
