import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import ErrorPage from "../../Pages/Share/ErrorPage/ErrorPage";
import Loading from "../../Pages/Share/Loading/Loading";

const AdminPrivetRoute = ({ children }) => {
  const { user, loading, dataBaseUser } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }

  if (user && dataBaseUser?.selectedRole === "admin") {
    return children;
  }

  // return
  return <ErrorPage error={"admin"} />;
};

export default AdminPrivetRoute;
