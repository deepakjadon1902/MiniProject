import React, { useEffect } from "react";
import { FaWpforms } from "react-icons/fa6";
import Layout from "../Layout";
import CheckoutNavigation from "../components/CheckoutForm/CheckoutNavigation";
import { useCart } from "../contexts/CartContext";
import { useCheckout } from "../contexts/CheckoutContext";
import CartEmpty from "../components/CheckoutForm/CartEmpty";

const Confirmation = () => {
  const { itemsInCart, calculateTotal } = useCart();
  const { retrieveUserData, isFormFilled } = useCheckout();
  const { name, address, city, region, postalCode, cardNumber } =
    retrieveUserData;

  return (
    <Layout>
      <main className="container mx-auto overflow-hidden px-8">
        <CheckoutNavigation />
        {isFormFilled ? (
          <section className="m-10 mx-auto max-w-2xl divide-y border p-8">
            <div className="mb-10 flex w-full flex-col items-center justify-center pb-8">
              <svg
                className="h-10 w-10 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h1 className="mt-4 text-center text-2xl font-semibold text-slate-800">
                We received your order!
              </h1>
              <p className="mt-3 text-center text-sm text-slate-600">
                Your order #2939993 is completed and ready to ship
              </p>
            </div>
            <div className="py-8">
              <div className="flex gap-20">
                <div className="w-1/2">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Shipping Address
                  </h2>
                  <p className="mt-6 text-sm text-gray-600">{name}</p>
                  <p className="mt-3 text-sm text-gray-600">
                    {address}
                    {city}
                    {region}
                    {postalCode}
                  </p>
                </div>

                <div className="w-1/2">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Payment Info
                  </h2>
                  <p className="mt-6 text-sm text-gray-600">Credit Card</p>
                  <p className="mt-3 text-sm text-gray-600">
                    VISA
                    <br />
                    ****
                    {cardNumber && cardNumber.slice(-4)}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Order Items
              </h2>

              <div className="mt-8">
                <ul className="divide-y">
                  {itemsInCart.map((items) => (
                    <li
                      key={items.id}
                      className="flex items-stretch justify-between py-6"
                    >
                      <div className="flex items-stretch">
                        <div className="flex-shrink-0">
                          <img
                            className="h-20 w-20 rounded-lg object-cover"
                            src={items.image}
                            alt={items.title}
                          />
                        </div>

                        <div className="ml-5 flex w-44 flex-col justify-between">
                          <p className="text-sm font-semibold">{items.title}</p>
                          <span className="text-xs font-normal">
                            x{items.quantity}
                          </span>
                          <p className="mt-3 text-sm capitalize text-gray-500">
                            {items.category}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-bold">${items.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-8">
              <ul>
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800">Sub total</p>
                  <p className="text-sm font-normal text-gray-600">
                    ${calculateTotal(itemsInCart)}
                  </p>
                </li>

                <li className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-normal text-gray-800">Total</p>
                  <p className="text-sm font-semibold">
                    ${calculateTotal(itemsInCart)}
                  </p>
                </li>
              </ul>
            </div>
          </section>
        ) : (
          <CartEmpty
            heading="Your checkout form is empty"
            subHeading="Please add the details in the checkout form to purchase your order"
            icon=<FaWpforms className="mx-auto h-12 w-12 text-gray-400" />
            linkTo="/checkout"
          />
        )}
      </main>
    </Layout>
  );
};

export default Confirmation;
