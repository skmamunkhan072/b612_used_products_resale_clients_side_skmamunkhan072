import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserOrderDataTableBody = ({ mybooklistData }) => {
  const navigate = useNavigate("");
  const handelPayment = (id) => {
    navigate(`/dashboard/payment/${id}`);
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
            {mybooklistData?.map((bookd, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">{i + 1}</td>
                <td className="p-4">
                  <img
                    className="w-20 rounded-lg"
                    src={
                      bookd?.productImageUrl
                        ? bookd?.productImageUrl
                        : "https://i.ibb.co/2vg4XRF/dribbble-1.gif"
                    }
                    alt="Apple Watch"
                  />
                </td>

                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  Laptop acer
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  <p>Name : {bookd?.name}</p>
                  <p className="text-xs">Email :{bookd?.email}</p>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  <div className="">
                    <p>
                      resale price :
                      <span className="font-normal">
                        {bookd?.resalePrice} Tk
                      </span>
                    </p>
                    <p>
                      original price :
                      <span className="font-normal">
                        {bookd?.originalPrice}Tk
                      </span>
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6 font-semibold text-red-500 dark:text-red-500 cursor-pointer">
                  Remove
                </td>
                <td className="py-4 px-6 font-semibold text-gray-500 dark:text-gray-500 cursor-pointer">
                  <Link to={`/dashboard/payment/${bookd?._id}`}>Pay Now</Link>
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
