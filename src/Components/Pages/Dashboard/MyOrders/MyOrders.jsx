import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";

const MyOrders = () => {
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All Orders"} />
      </div>
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
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">1</td>
                <td className="p-4">
                  <img
                    className="w-20 rounded-lg"
                    src="https://i.ibb.co/2vg4XRF/dribbble-1.gif"
                    alt="Apple Watch"
                  />
                </td>

                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  Laptop acer
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  <p>Name : mamaujn</p>
                  <p className="text-xs">Email : mamun@gmail.com</p>
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  <div className="">
                    <p>
                      resale price : <span className="font-normal">1000Tk</span>
                    </p>
                    <p>
                      original price :{" "}
                      <span className="font-normal">3000Tk</span>
                    </p>
                  </div>
                </td>
                <td className="py-4 px-6 font-semibold text-red-500 dark:text-red-500 cursor-pointer">
                  Remove
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
