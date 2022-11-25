import React from "react";

const CategoryButtonGrop = () => {
  return (
    <div className="flex items-center justify-center my-5">
      <div
        className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
        role="group"
      >
        <button
          type="button"
          className="rounded-l inline-block px-10 py-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out"
        >
          Left
        </button>
        <button
          type="button"
          className="inline-block px-10 py-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out"
        >
          Middle
        </button>
        <button
          type="button"
          className="rounded-r inline-block px-10 py-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default CategoryButtonGrop;
