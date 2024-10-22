import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useHeader } from "../../contexts/HeaderContext";
import { useDatabase } from "../../contexts/DatabaseContext";

const OffCanvas = () => {
  const { isOffCanvasOpen, setOffCanvasOpen, allCategories, offCanvasHandler } =
    useHeader();
  const { data } = useDatabase();
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const toggleSubmenu = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const toggleMainmenu = () => {
    setActiveCategory(null);
  };

  const openProduct = (id) => {
    navigate(`/products/${id}`);
    setOffCanvasOpen((isOffCanvasOpen) => !isOffCanvasOpen);
  };

  const renderSubmenu = (category) => {
    return (
      <div className="pr-6">
        <ul className="overflow-hidden py-3">
          <div className="mb-5 flex justify-between">
            <button
              className="text-lg font-bold uppercase leading-relaxed text-gray-700"
              onClick={toggleMainmenu}
            >
              ← Back
            </button>
          </div>

          {data
            .filter((item) => item.category === category)
            .map((item) => (
              <li
                onClick={() => openProduct(item.id)}
                key={item.id}
                className="my-2 flex cursor-pointer gap-3 rounded-sm bg-slate-100 px-4 py-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-square h-8 w-8 object-cover"
                />
                <span className=" text-sm">{item.title}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="offcanvas">
      <div
        className={`absolute top-0 z-50 h-screen w-full overflow-hidden bg-white px-6 py-3 transition duration-500 ease-in-out sm:w-6/12 ${isOffCanvasOpen ? " opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <div
          className={` mb-5 flex justify-between transition duration-500 ease-in-out ${activeCategory ? "-translate-x-full opacity-0" : "-translate-x-0 opacity-100"}`}
        >
          <span className="text-lg font-bold uppercase leading-relaxed text-gray-700">
            discover
          </span>
          <button onClick={offCanvasHandler}>
            <RxCross2 size={"24px"} />
          </button>
        </div>

        <ul
          className={`transition duration-500 ease-in-out ${activeCategory ? "-translate-x-full opacity-0" : "-translate-x-0 opacity-100"}`}
        >
          {allCategories.map((category, index) => (
            <li
              key={index}
              onClick={() => toggleSubmenu(category)}
              className={`my-2 flex cursor-pointer justify-between rounded-sm bg-slate-100 px-4 py-6`}
            >
              <span className="ml-3 font-bold capitalize text-gray-700">
                {category}
              </span>
              <span>→</span>
            </li>
          ))}
        </ul>
        <div>
          {allCategories.map((category, index) => (
            <div
              key={index}
              className={`absolute top-0 transition duration-500 ease-in-out ${activeCategory ? " opacity-100" : "-translate-x-full opacity-0"}`}
            >
              {category === activeCategory && renderSubmenu(category)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
