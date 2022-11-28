import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvaider/AuthContextProvaider";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";
import DeleteModal from "../../Share/DeleteModal/DeleteModal";
import Loading from "../../Share/Loading/Loading";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import UserCardTable from "../../Share/UserCardTable/UserCardTable";

const AllUsers = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [userId, setUserId] = useState("");

  const {
    data: allUsers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user],
    queryFn: async () => {
      const res = await fetch(`${serverUrl}/users`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("access_Token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"All Users"} />
        <DeleteModal userId={userId} refetch={refetch} />
      </div>
      <div className="px-10">
        <UserCardTable allUsers={allUsers} setUserId={setUserId} />
      </div>
    </section>
  );
};

export default AllUsers;
