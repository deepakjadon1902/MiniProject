import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { useCart } from "../../contexts/CartContext";

const CheckoutNavigation = () => {
  const { setSlideInCart } = useCart();

  return (
    <nav className="border-b py-8">
      <ol className="flex items-center justify-center">
        <li
          className="flex cursor-pointer items-center"
          onClick={() => setSlideInCart(true)}
        >
          Cart
        </li>
        <IoIosArrowForward className="mx-4 text-slate-300" />
        <li className="flex cursor-pointer items-center">
          <NavLink
            to={"/checkout"}
            className={({ isActive }) => (isActive ? "text-sky-500" : "")}
          >
            Checkout
          </NavLink>
        </li>
        <IoIosArrowForward className="mx-4 text-slate-300" />
        <li className="flex cursor-pointer items-center">
          <NavLink
            to={"/confirmation"}
            className={({ isActive }) => isActive && "text-sky-500"}
          >
            Confirmation
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default CheckoutNavigation;
