import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { useCart } from "../../contexts/CartContext";

const ProductCard = ({ product, className }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const openProduct = (id) => {
    navigate(`/shop/${id}`);
  };

  if (product) {
    const { addToCartHandler } = useCart();
    return (
      <div
        className={twMerge(
          "flex flex-col justify-between gap-5 border border-gray-300 p-4",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="overflow-hidden">
            <img
              className={`aspect-square w-full  cursor-pointer object-contain transition duration-500 ease-out ${isHovered && "scale-110"}`}
              src={product.image}
              alt={product.title}
              onClick={() => openProduct(product.id)}
            />
          </div>
          <div className="absolute bottom-8 right-3 rounded bg-[#000000a6] p-1 text-xs text-white">
            <div className="flex items-center gap-2">
              <RiStarSFill className="inline-block text-yellow-400" />
              <span>
                {product.rating.rate} | {product.rating.count}
              </span>
            </div>
          </div>
          <span className="p-2 text-sm font-bold uppercase">
            {product.category}
          </span>
        </div>
        <div className="p-2">
          <h3
            className={`text-xs font-semibold ${isHovered && "text-gray-500"}`}
          >
            {product.title}
          </h3>
          <div className="mt-5 flex items-center">
            <div className="relative">
              <span className="block bg-yellow-300 p-2 pr-4 text-xs font-bold">
                {product.price} USD
              </span>
              <span className="absolute left-full top-0 -ml-2 block h-full w-3 skew-x-12 bg-yellow-400"></span>
            </div>
            <button
              className="cursor-pointer bg-black p-2 text-white"
              onClick={() =>
                addToCartHandler(
                  product.id,
                  product.title,
                  product.category,
                  product.image,
                  product.price,
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductCard;
