import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { serverUrl } from "../../../Hooks/AllUrl/AllUrl";

const UserOrderDataTableBody = ({ mybooklistData, refetch }) => {
  const navigate = useNavigate("");
  const handelPayment = (id) => {
    refetch();
    navigate(`/dashboard/payment/${id}`);
  };
  // Delete product
  const heandelDeleteProduct = (id) => {
    fetch(`${serverUrl}/book-now/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("access_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
          toast.success("products delete is successful");
        }
      });
  };

  return (
    <div className="px-10">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                1
              </th>
              <th scope="col" className="py-3 px-6">
                Product
              </th>

              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                previous owner
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
              <th scope="col" className="py-3 px-6">
                payment
              </th>
            </tr>
          </thead>
          <tbody>
            {mybooklistData &&
              mybooklistData?.map((bookd, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">{i + 1}</td>
                  <td className="p-4">
                    <img
                      className="w-20 rounded-lg"
                      src={
                        bookd?.bookingPhotoUrl
                          ? bookd?.bookingPhotoUrl
                          : "https://i.ibb.co/2vg4XRF/dribbble-1.gif"
                      }
                      alt="Apple Watch"
                    />
                  </td>

                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {bookd?.productName}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    <p>Name : {bookd?.sealerName}</p>
                    <p className="text-xs">Email :{bookd?.sealerEmail}</p>
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    <div className="">
                      <p>
                        price :
                        <span className="font-normal ml-2">
                          {bookd?.price}Tk
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-red-500 dark:text-red-500 cursor-pointer">
                    <span
                      onClick={() => heandelDeleteProduct(bookd?._id)}
                      className="hover:border-grey-600 hover:border-b-2"
                    >
                      Remove
                    </span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-500 dark:text-gray-500 cursor-pointer">
                    {bookd?.payment === "paid" && <span>Paid</span>}
                    {!bookd?.payment && (
                      <Link
                        to={`/dashboard/payment/${bookd?.bookingProductId}`}
                        className="hover:border-grey-600 hover:border-b-2"
                      >
                        Pay Now
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrderDataTableBody;
