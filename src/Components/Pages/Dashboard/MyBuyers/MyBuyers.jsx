import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";

const MyBuyers = () => {
  const myBuyers = useLoaderData();
  console.log(myBuyers);
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"My All Buyers"} />
      </div>
      <div className="px-10">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="py-3 px-6 text-center">
                  User Identity
                </th>
                <th scope="col" className="py-3 px-6">
                  Position
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {myBuyers &&
                myBuyers.map((user, i) => (
                  <tr
                    key={user?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4 w-4">{i + 1}</td>
                    <th
                      scope="row"
                      className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://i.ibb.co/Vq4mhCx/people3.png"
                        }
                        alt="User Img"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {user?.name}
                        </div>
                        <div className="font-normal text-gray-500">
                          {user?.email}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-6">user</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                        Online
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBuyers;
