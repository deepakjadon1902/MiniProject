import React from "react";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

const SingleCategoryFilter = ({
  uniqueCat,
  selectedCategory,
  categorySortingHandler,
}) => {
  return (
    <div>
      <h3 className="mb-3 block border-b pb-3 text-lg font-medium text-gray-900">
        Filter by Category
      </h3>
      <ul>
        {uniqueCat.map((category) => (
          <li
            key={category}
            className="flex cursor-pointer items-center gap-2 capitalize"
            onClick={() => categorySortingHandler(category)}
          >
            <span>
              {selectedCategory === category ? (
                <BiSolidCheckboxChecked size={24} />
              ) : (
                <BiCheckbox size={24} />
              )}
            </span>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleCategoryFilter;
