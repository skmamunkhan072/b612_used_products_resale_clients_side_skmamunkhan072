import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import ErrorPage from "../../Pages/Share/ErrorPage/ErrorPage";
import Loading from "../../Pages/Share/Loading/Loading";

const SealerPrivetRoute = ({ children }) => {
  const { user, loading, dataBaseUser } = useContext(AuthContext);
  console.log(dataBaseUser);
  if (loading) {
    return <Loading />;
  }

  if (user && dataBaseUser?.selectedRole === "sealer") {
    return children;
  }

  // return
  return <ErrorPage error={"sealer"} />;
};

export default SealerPrivetRoute;
