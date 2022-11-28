import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../Hooks/AllUrl/AllUrl";
import Loading from "../../Pages/Share/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading, setloading, setDataBaseUser } =
    useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      return;
    }

    setloading(true);
    fetch(`${serverUrl}/user?email=${user?.email}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataBaseUser(data);
        setloading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
