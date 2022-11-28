import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";

const AllSellers = () => {
  const data = useLoaderData([]);
  console.log(data);
  return (
    <section>
      <div className="mb-5">
        <SectionTitle title={"All Sellers"} />
      </div>
      <div className="px-10">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  1
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  User Identity
                </th>
                <th scope="col" className="py-3 px-6">
                  Position
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {allUsers?.map((user, i) => (
                <UserCardTableBodyTr
                  serialNo={i + 1}
                  key={user._id}
                  allUser={user}
                  setUserId={setUserId}
                />
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllSellers;
