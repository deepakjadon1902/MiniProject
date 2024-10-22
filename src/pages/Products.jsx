import React, { useState, useEffect } from "react";
import ShopSort from "../components/ShopFilter/ShopSort";
import SingleCategoryFilter from "../components/ShopFilter/SingleCategoryFilter";
import ProductCard from "../components/Utilities/ProductCard";
import Loading from "../components/Utilities/Loading";
import Layout from "../Layout";
import { useDatabase } from "../contexts/DatabaseContext";

const Products = () => {
  const { data } = useDatabase();
  const [uniqueCat, setUniqueCat] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  // Effect to extract unique categories from data
  useEffect(() => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    setUniqueCat(uniqueCategories);
  }, [data]);

  // Effect to filter products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = data.filter(
        (item) => item.category === selectedCategory,
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedCategory]);

  // Sort products based on selected sorting option
  const sortProducts = (sortBy) => {
    let sortedData;

    if (sortBy === "popularity") {
      sortedData = [...filteredData].sort(
        (a, b) => b.rating.count - a.rating.count,
      );
    } else if (sortBy === "low-to-high") {
      sortedData = [...filteredData].sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-to-low") {
      sortedData = [...filteredData].sort((a, b) => b.price - a.price);
    }
    setFilteredData(sortedData);
  };

  // Effect to update sorted products when data changes
  useEffect(() => {
    sortProducts("popularity");
  }, [data]);

  // Handler for category selection
  const categorySortingHandler = (category) => {
    setSelectedCategory(category);
  };

  // Handler for sorting option selection
  const sortHandler = (event) => {
    sortProducts(event.target.value);
  };

  if (data.length) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1>Shop Page</h1>
          <ShopSort sortHandler={sortHandler} />

          <div className="flex flex-wrap">
            <aside className="w-full xl:w-3/12">
              <div className="mr-10 rounded border bg-slate-100 p-10">
                <SingleCategoryFilter
                  uniqueCat={uniqueCat}
                  categorySortingHandler={categorySortingHandler}
                  selectedCategory={selectedCategory}
                />
              </div>
            </aside>
            <div className="w-full xl:w-9/12">
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <ProductCard key={index} product={item} />
                  ))
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return <Loading />;
  }
};

export default Products;
