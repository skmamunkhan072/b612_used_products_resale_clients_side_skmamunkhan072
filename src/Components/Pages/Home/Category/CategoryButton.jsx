import React from "react";

const CategoryButton = ({ category }) => {
  return (
    <button
      type="button"
      className="rounded-l inline-block px-10 py-3 bg-purple-600 text-white font-medium text-xs leading-tight uppercase hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out"
    >
      {category.categoryName}
    </button>
  );
};

export default CategoryButton;
