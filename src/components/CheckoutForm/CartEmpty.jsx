import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartEmpty({
  heading = "Your cart is empty",
  subHeading = "Looks like you haven't added any items to your cart yet.",
  icon = <FaShoppingCart className="mx-auto h-12 w-12 text-gray-400" />,
  linkTo,
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-10">
      <div className="text-center">
        {icon}
        <h2 className="mt-6 text-lg font-medium text-gray-900">{heading}</h2>
        <p className="mt-2 text-sm text-gray-600">{subHeading}</p>
        <div className="mt-6">
          <Link
            to={linkTo}
            className="inline-block bg-sky-500  px-4 py-2 font-medium text-white transition duration-300 hover:bg-sky-400"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
