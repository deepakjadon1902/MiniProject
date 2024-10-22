import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

import { useDatabase } from "../contexts/DatabaseContext";
import { useCart } from "../contexts/CartContext";

import Layout from "../Layout";
import ProductAccordion from "../components/Utilities/ProductAccordion";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { singleProduct, FetchSingleProduct } = useDatabase();
  const { addToCartHandler } = useCart();

  const { id } = useParams();

  useEffect(() => {
    FetchSingleProduct(id);
  }, [singleProduct, FetchSingleProduct]);

  // Since the fakestoreapi.com doesn't provides anymore data,
  // I'm adding AccordionData staticly.

  const AccordionData = [
    {
      title: "Features",
      content: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      title: "Shipping",
      content: [
        "Free shipping on orders over $300",
        "International shipping available",
        "Expedited shipping options",
        "Signature required upon delivery",
      ],
    },
    {
      title: "Returns",
      content: [
        "Easy return requests",
        "Pre-paid shipping label included",
        "10% restocking fee for returns",
        "60 day return window",
      ],
    },
  ];

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  if (singleProduct) {
    const { title, image, description, category, price, rating } =
      singleProduct;
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="-mx-4 flex flex-col md:flex-row">
              <div className="px-4 md:flex-1">
                <div className="mb-4 rounded-lg bg-gray-100 p-10">
                  <img
                    className="mx-auto h-full w-10/12 object-cover mix-blend-multiply"
                    src={image}
                    alt={title}
                  />
                </div>
              </div>
              <div className="p-10 px-4 md:flex-1">
                <p className="mb-4 text-sm font-bold uppercase text-blue-400">
                  {category}
                </p>
                <h2 className="mb-3 text-4xl font-bold leading-9 text-gray-800">
                  {title}
                </h2>
                <div className="my-4 flex items-center gap-2">
                  <span className="">
                    {new Array(Math.floor(rating.rate))
                      .fill(null)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className="inline-block text-yellow-400"
                        />
                      ))}
                    {rating.rate % 1 !== 0 && (
                      <FaStarHalfAlt className="inline-block text-yellow-400" />
                    )}{" "}
                  </span>
                  <span className="text-sm text-gray-500 ">
                    {rating.rate}/5 ({rating.count} Reviews)
                  </span>
                </div>
                <p className="my-3 border-b border-t py-4 text-3xl leading-10">
                  ${price}
                </p>
                <p className="my-6 text-gray-600 *:text-base">{description}</p>

                <div className="mb-4 flex flex-col gap-6">
                  <form className="flex items-center gap-10">
                    <p className="mb-2 block font-medium text-gray-900">
                      Quantity:
                    </p>
                    <div className="relative flex max-w-[8rem] items-center">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="h-12 rounded-s border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                        onClick={decrementQuantity}
                      >
                        <svg
                          className="h-3 w-3 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="block h-12 w-full border-x-0 border-y border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="1"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        className="h-12 rounded-e border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                        onClick={incrementQuantity}
                      >
                        <svg
                          className="h-3 w-3 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>

                  <button
                    className="flex items-center justify-center gap-3 rounded bg-sky-500 px-8 py-3 text-white transition duration-300 hover:bg-sky-600"
                    onClick={() => {
                      addToCartHandler(
                        id,
                        title,
                        category,
                        image,
                        price,
                        quantity,
                      );
                    }}
                  >
                    <BsCart2 />
                    <span>Add to bag</span>
                  </button>
                </div>
                <section>
                  <ProductAccordion AccordionData={AccordionData} />
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default SingleProduct;
