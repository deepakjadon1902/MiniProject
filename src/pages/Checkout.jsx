import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../Layout";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import CheckoutNavigation from "../components/CheckoutForm/CheckoutNavigation";
import CartEmpty from "../components/CheckoutForm/CartEmpty";
import { useCart } from "../contexts/CartContext";
import { useCheckout } from "../contexts/CheckoutContext";

const Checkout = () => {
  const { itemsInCart, calculateTotal } = useCart();
  const { isFormFilled } = useCheckout();
  const navigate = useNavigate();

  const openProductHandler = (id) => {
    navigate(`/products/${id}`);
  };

  const isCartEmpty = itemsInCart.length > 0;

  return (
    <Layout>
      <main className="container mx-auto overflow-hidden px-8">
        <CheckoutNavigation />
        {isCartEmpty ? (
          <section className="mx-auto flex  flex-wrap  md:flex-nowrap">
            <CheckoutForm />
            <section
              aria-labelledby="summary-heading"
              className="w-full bg-gray-100 pb-16 pl-10 pr-10 pt-16 md:w-1/2 md:pl-20"
            >
              <div className="gx uc cxj">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>
                <ul role="list" className="acc acg avz awd axu">
                  {itemsInCart.map((items) => {
                    return (
                      <li
                        key={items.id}
                        className="flex border-b border-gray-200 py-6"
                      >
                        <img
                          src={items.image}
                          alt={items.title}
                          className="w-20 cursor-pointer"
                          onClick={() => {
                            openProductHandler(items.id);
                          }}
                        />
                        <div className="ml-4 flex-auto">
                          <h3
                            className="cursor-pointer text-sm hover:text-gray-500"
                            onClick={() => {
                              openProductHandler(items.id);
                            }}
                          >
                            {items.title}
                          </h3>
                          <p className="my-1 text-xs capitalize text-gray-500">
                            {items.category}
                          </p>
                          <p className="text-xs text-gray-500">
                            x{items.quantity}
                          </p>
                        </div>
                        <p className="flex-none font-medium text-gray-600">
                          ${items.price}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <dl className="pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-600">
                      ${calculateTotal(itemsInCart)}
                    </dd>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-600">FREE</dd>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <dt className="text-gray-600">Taxes</dt>
                    <dd className="font-medium text-gray-600">$0</dd>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-5 text-base">
                    <dt className="avx">Total</dt>
                    <dd className="avx">${calculateTotal(itemsInCart)}</dd>
                  </div>
                </dl>
              </div>
            </section>
          </section>
        ) : (
          <CartEmpty linkTo="/shop" />
        )}
      </main>
    </Layout>
  );
};

export default Checkout;
