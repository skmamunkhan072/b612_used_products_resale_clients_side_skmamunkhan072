import React from "react";

const AllUsers = () => {
  return (
    <div className="px-10">
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                1
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                User Identity
              </th>
              <th scope="col" class="py-3 px-6">
                Position
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="p-4 w-4">2</td>
              <th
                scope="row"
                class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://i.ibb.co/Vq4mhCx/people3.png"
                  alt="User Img"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </th>
              <td class="py-4 px-6">user</td>
              <td class="py-4 px-6">
                <div class="flex items-center">
                  <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                  Online
                </div>
              </td>
              <td class="py-4 px-6">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

{
  /* <td class="w-1/2 border-2 text-grey-300 lg:w-auto p-3 text-center block lg:table-cell relative lg:static">
<span class="border-2 items-center flex lg:hidden h-[100%] absolute top-0 left-0 px-2 py-1 text-xs font-bold ">
  <strong>coponent</strong>
</span>
KnobHome
</td> */
}
