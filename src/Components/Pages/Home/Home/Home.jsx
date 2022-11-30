import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import Loading from "../../Share/Loading/Loading";
import Baner from "../Baner/Baner";
import AllCategory from "../Category/AllCategory";
import Category from "../Category/Category";
import Explore from "../Explore/Explore";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Baner />
      <Explore />
      <AllCategory />
    </div>
  );
};

export default Home;
