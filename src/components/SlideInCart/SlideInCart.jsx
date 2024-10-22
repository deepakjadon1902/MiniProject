import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { twMerge } from "tailwind-merge";
import { MdDelete } from "react-icons/md";
import { useCheckout } from "../../contexts/CheckoutContext";

const SlideInCart = ({ setSlideInCart, slideInCart, className }) => {
  const { itemsInCart, calculateTotal, calculateQuantity, removeItemHandler } =
    useCart();

  const { retrieveUserData, userData } = useCheckout();

  return (
    <div
      className={twMerge(
        "fixed right-0 top-0 z-50 h-full w-full translate-x-full overflow-y-auto border bg-white transition duration-500 ease-out lg:w-3/12",
        className,
      )}
    >
      <button
        type="button"
        className="absolute right-3 top-4 z-[70]"
        onClick={() => {
          setSlideInCart(!slideInCart);
        }}
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      {itemsInCart.length > 0 && (
        <button
          onClick={removeItemHandler}
          className="absolute left-3 top-4 z-[70]"
        >
          <MdDelete size={24} className="shake" />
        </button>
      )}
      {itemsInCart.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartWithItem
          itemsInCart={itemsInCart}
          calculateTotal={calculateTotal}
          calculateQuantity={calculateQuantity}
          setSlideInCart={setSlideInCart}
          slideInCart={slideInCart}
        />
      )}
    </div>
  );
};

export default SlideInCart;

const EmptyCart = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <svg
        width="56"
        viewBox="0 0 65 74"
        xmlns="http://www.w3.org/2000/svg"
        className="m-5"
      >
        <g fillRule="nonzero" fill="none">
          <path
            d="M64.407 9.856L53.605 0H11.371L.569 9.856A1.548 1.548 0 00.1 11.603c.235.619.843 1.031 1.524 1.031h61.727a1.62 1.62 0 001.522-1.031 1.545 1.545 0 00-.467-1.747z"
            fill="#C4C4C4"
          ></path>
          <path
            d="M63.351 9.927H1.624C.728 9.927 0 10.644 0 11.529v59.267C0 72.566 1.454 74 3.249 74h58.478c1.795 0 3.249-1.434 3.249-3.204V11.53c0-.885-.728-1.602-1.625-1.602z"
            fill="#E4E4E4"
          ></path>
          <path
            d="M32.488 45.122c-7.963 0-14.44-6.447-14.44-14.37v-4.79a1.6 1.6 0 011.605-1.596 1.6 1.6 0 011.604 1.596v4.79c0 6.163 5.04 11.177 11.23 11.177 6.192 0 11.231-5.014 11.231-11.177v-4.79a1.6 1.6 0 011.604-1.596 1.6 1.6 0 011.605 1.596v4.79c0 7.923-6.477 14.37-14.44 14.37z"
            fill="#6D6D6D"
          ></path>
        </g>
      </svg>
      <p className="text-base font-light text-slate-500">Your cart is empty.</p>
      <a href="/shop">SHOP NOW</a>
    </div>
  );
};

const CartWithItem = ({
  itemsInCart,
  calculateTotal,
  calculateQuantity,
  setSlideInCart,
  slideInCart,
}) => {
  return (
    <>
      <div className="relative flex justify-center border-b py-4">
        <p className="font-bold">
          Your Cart ({calculateQuantity(itemsInCart)})
        </p>
      </div>
      <div className="flex h-full flex-col justify-between">
        <div className="p-5">
          {itemsInCart.map((item) => {
            return (
              <React.Fragment key={item.id}>
                {itemsInCart.length > 0 ? (
                  <div className="my-3 flex gap-3 border-b pb-3.5">
                    <div className="w-2/12">
                      <img className="w-10" src={item.image} alt={item.title} />
                    </div>
                    <div className="w-10/12">
                      <h3 className="block text-sm">{item.title}</h3>
                      <div className="mt-3 flex justify-between">
                        <span>
                          <b>Quantity:</b> {item.quantity}
                        </span>
                        <span className="block">$ {item.price}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  "Item removed successfully!"
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="sticky bottom-0 bg-slate-100 p-5">
          <div className="flex justify-between border-b pb-3">
            <p>Shipping</p>
            <p className="text-sm font-semibold text-slate-400">FREE</p>
          </div>
          <div className="flex justify-between py-3">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">$ {calculateTotal(itemsInCart)}</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <a
              href="/checkout"
              className="my-5 w-full bg-black py-3 text-center text-lg font-semibold text-white"
            >
              Checkout
            </a>
            <a href="/shop" className="text-sm font-light text-slate-500">
              or continue shopping
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
