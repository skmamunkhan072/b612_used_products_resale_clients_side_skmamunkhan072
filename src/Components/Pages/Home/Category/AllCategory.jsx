import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import Loading from "../../Share/Loading/Loading";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import CategoryButtonGrop from "./CategoryButtonGrop";

const AllCategory = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <SectionTitle title="Shop By Category" />
      <CategoryButtonGrop />
    </div>
  );
};

export default AllCategory;
