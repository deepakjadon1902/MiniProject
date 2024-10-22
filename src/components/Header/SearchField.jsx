import React, { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { useDatabase } from "../../contexts/DatabaseContext";

const SearchField = () => {
  const [searchBox, setSearchBox] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const inputRef = useRef(null);
  const searchBoxRef = useRef(null);
  const { data } = useDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setSearchInput("");
        setSearchResult([]);
        setSearchBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBoxRef]);

  useEffect(() => {
    if (searchBox && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchBox]);

  const searchAppearanceHandler = () => {
    setSearchBox(true);
  };

  const searchResultHandler = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      const lowercaseSearchInput = searchInput.toLowerCase();
      setSearchResult(
        data.filter((item) =>
          item.title.toLowerCase().includes(lowercaseSearchInput),
        ),
      );
    } else {
      setSearchResult([]);
    }
  }, [searchInput, data]);

  const openProduct = (id) => {
    navigate(`/products/${id}`);
    setSearchInput("");
    setSearchResult([]);
  };

  return (
    <div ref={searchBoxRef} className="relative w-full">
      <div
        className={`flex flex-1 cursor-text items-center gap-3 rounded-lg bg-white p-2 ${searchBox && "z-50"}`}
        onClick={searchAppearanceHandler}
      >
        <div className="h-full w-full outline-none">
          {!searchBox ? (
            <div
              className="flex font-extrabold text-gray-400"
              onClick={() => inputRef.current.focus()}
            >
              <span className="mr-1 font-normal">Search for</span>
              <Typewriter
                options={{
                  strings: [
                    "Surfing Shorts",
                    "Carrom Boards",
                    "Table Tennis",
                    "Skating",
                    "Basketball",
                    "Jackets",
                  ],
                  autoStart: true,
                  loop: true,
                  speed: 53,
                }}
              />
            </div>
          ) : (
            <input
              ref={inputRef}
              className="w-full"
              type="text"
              placeholder="Search here"
              onChange={searchResultHandler}
              value={searchInput}
            />
          )}
        </div>
        <IoIosSearch />
      </div>
      {searchResult.length > 0 && (
        <div className="absolute left-0 top-12 z-50 w-full rounded bg-white px-8 py-6 shadow-md">
          <ul>
            {searchResult.map((item) => (
              <li
                key={item.id}
                className="mb-3 flex cursor-pointer gap-10"
                onClick={() => openProduct(item.id)}
              >
                <img src={item.image} alt={item.title} className="w-10" />
                <div>
                  <h2 className="hover:text-gray-500">{item.title}</h2>
                  <span className="text-xs text-gray-600">${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchField;
