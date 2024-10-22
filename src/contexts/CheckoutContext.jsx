import React, { createContext, useContext, useState, useEffect } from "react";

const CheckoutContext = createContext();

export const useCheckout = () => {
  return useContext(CheckoutContext);
};

export const CheckoutProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    region: "",
    postalCode: "",
    orderStatus: "unsuccessful",
  });
  const [isFormFilled, setIsFormFilled] = useState({});
  const userDataJSON = localStorage.getItem("userData");
  const retrieveUserData = userDataJSON ? JSON.parse(userDataJSON) : {};

  useEffect(() => {
    setIsFormFilled(
      retrieveUserData && retrieveUserData.orderStatus == "successful",
    );
  }, [userData.orderStatus]);

  return (
    <CheckoutContext.Provider
      value={{ userData, setUserData, retrieveUserData, isFormFilled }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
