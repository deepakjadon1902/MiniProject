import React from "react";

const ShopSort = ({ sortHandler }) => {
  return (
    <form className="mb-6 flex items-center justify-end gap-2">
      <label className="block text-lg font-medium text-gray-900">
        Sort By:
      </label>
      <div className="grid">
        <svg
          className="pointer-events-none relative right-1 z-10 col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <select
          className="col-start-1 row-start-1 w-52 appearance-none  rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-slate-700 hover:border-cyan-500 hover:bg-white  forced-colors:appearance-auto"
          onChange={sortHandler}
          defaultValue="popularity"
        >
          <option value="popularity">Popularity</option>
          <option value="low-to-high">Price: low to high</option>
          <option value="high-to-low">Price: high to low</option>
        </select>
      </div>
    </form>
  );
};

export default ShopSort;
