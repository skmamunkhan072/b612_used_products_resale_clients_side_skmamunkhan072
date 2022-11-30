import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";

const UserCardTableBodyTr = ({ allUser, serialNo, setUserId }) => {
  const [sellersVerifyd, setSellersVerifyd] = useState(false);
  const { email, name, selectedRole, sellersVerify } = allUser;

  // cellar Verify
  const handelSealerVerify = (id) => {
    console.log("hello", id);
    fetch(`${serverUrl}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          setSellersVerifyd(true);
          toast.success("sealer is verify successfully");
        }
      });
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">{serialNo}</td>
      <th
        scope="row"
        className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src="https://i.ibb.co/Vq4mhCx/people3.png"
          alt="User Img"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="py-4 px-6"> {selectedRole}</td>
      <td className="py-4 px-6">
        <div className="flex items-center">
          {selectedRole === "sealer" && (
            <>
              {sellersVerify || sellersVerifyd ? (
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
              ) : (
                <div className="h-2.5 w-2.5 rounded-full bg-red-400 mr-2"></div>
              )}
              {sellersVerify || sellersVerifyd ? (
                ""
              ) : (
                <h1
                  onClick={() => handelSealerVerify(allUser?._id)}
                  className="cursor-pointer font-bold hover:border-b-2 border-gray-400"
                >
                  verify
                </h1>
              )}
            </>
          )}
        </div>
      </td>
      <td className="py-4 px-6">
        <label
          onClick={() => setUserId(allUser?._id)}
          htmlFor="delete_popup_modal"
          className="cursor-pointer text-red-400 font-bold hover:border-b-2 border-red-400	"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default UserCardTableBodyTr;
