import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [slideInCart, setSlideInCart] = useState(false);

  const addToCartHandler = (
    id,
    title,
    category,
    image,
    price,
    quantity = 1,
  ) => {
    const itemIndex = itemsInCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const updatedCart = itemsInCart.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setItemsInCart(updatedCart);
    } else {
      setItemsInCart((prevItems) => [
        ...prevItems,
        { id, title, category, image, price, quantity },
      ]);
    }

    setSlideInCart(true);
  };

  const getOverlay = document.getElementById("body-overlay");

  useEffect(() => {
    if (slideInCart) {
      getOverlay.classList.add("cart-offcanvas-open");
    } else {
      getOverlay.classList.remove("cart-offcanvas-open");
    }

    return () => {
      getOverlay.classList.remove("cart-offcanvas-open");
    };
  }, [slideInCart]);

  const calculateTotal = (items) => {
    let total = 0;

    items.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total;
  };

  const calculateQuantity = (items) => {
    let quantity = 0;

    items.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  };

  useEffect(() => {
    const retrievedProducts = JSON.parse(localStorage.getItem("products"));
    if (retrievedProducts) {
      setItemsInCart(retrievedProducts);
    }
  }, []);

  useEffect(() => {
    if (itemsInCart.length > 0) {
      localStorage.setItem("products", JSON.stringify(itemsInCart));
    }
  }, [itemsInCart]);

  const removeItemHandler = () => {
    localStorage.removeItem("products");
    setItemsInCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addToCartHandler,
        calculateTotal,
        calculateQuantity,
        slideInCart,
        setSlideInCart,
        removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
