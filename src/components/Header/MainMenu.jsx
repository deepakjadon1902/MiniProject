import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const MainMenu = ({
  MenuArray,
  label,
  slideInCart,
  setSlideInCart,
  TotalQuantity,
}) => {
  return (
    <ul className="flex gap-x-5 text-white">
      {MenuArray.map((items) => (
        <li key={items.id}>
          <a href={items.url} className="flex flex-col items-center gap-1">
            {items.icon}
            {label && <span className="text-sm">{items.menu}</span>}
          </a>
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            setSlideInCart(!slideInCart);
          }}
          className="relative flex flex-col items-center gap-1"
        >
          <MdOutlineShoppingCart />
          {label && <span className="text-sm">cart</span>}
          <div className="absolute bottom-8 left-3 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-yellow-800 text-[8px]">
            {TotalQuantity}
          </div>
        </button>
      </li>
    </ul>
  );
};

export default MainMenu;
