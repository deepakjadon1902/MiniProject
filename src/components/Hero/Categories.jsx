import React from "react";
import { useDatabase } from "../../contexts/DatabaseContext";

const Categories = () => {
  const { data } = useDatabase();

  const uniqueCategoryCollection = [
    ...new Set(data.map((item) => item.category)),
  ];

  const firstImage = (category) => {
    return data.find((item) => item.category === category)?.image;
  };

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-4 py-10">
        {uniqueCategoryCollection.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-5"
          >
            <img
              className="aspect-square h-14 w-14"
              src={firstImage(category)}
              alt={category}
            />

            <h2 className="capitalize">{category}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
