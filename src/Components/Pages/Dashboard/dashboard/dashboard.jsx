import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import AllUsers from "../AllUsers/AllUsers";
import MyOrders from "../MyOrders/MyOrders";
import MyProducts from "../MyProducts/MyProducts";

const Dashboard = () => {
  const { dataBaseUser } = useContext(AuthContext);
  return (
    <div>
      {dataBaseUser?.selectedRole === "admin" && <AllUsers />}

      {dataBaseUser?.selectedRole === "sealer" && <MyProducts />}

      {dataBaseUser?.selectedRole === "user" && <MyOrders />}
    </div>
  );
};

export default Dashboard;
