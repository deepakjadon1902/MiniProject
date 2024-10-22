import { useState, createContext, useContext, useEffect } from "react";
import Loading from "../components/Utilities/Loading";

const DatabaseContext = createContext();

export const useDatabase = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider = ({ children }) => {
  const [data, setData] = useState();
  const [singleProduct, setSingleProduct] = useState();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const FetchInfo = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const database = await response.json();

      setData(database);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const FetchSingleProduct = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const database = await response.json();

      setSingleProduct(database);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchInfo();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DatabaseContext.Provider
      value={{ data, singleProduct, FetchSingleProduct }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};
