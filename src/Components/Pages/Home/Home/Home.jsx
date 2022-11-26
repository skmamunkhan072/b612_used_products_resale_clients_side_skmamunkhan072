import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import Loading from "../../Share/Loading/Loading";
import Baner from "../Baner/Baner";
import Category from "../Category/Category";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Baner />
      <Category />
    </div>
  );
};

export default Home;
