import React, { useState } from "react";

const ProductAccordion = ({ AccordionData }) => {
  const [isActive, setIsActive] = useState(null);

  const AccordionHandler = (index) => {
    setIsActive((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      {AccordionData.map((item, index) => (
        <div key={index} className="">
          <h3 className="border-t">
            <button
              onClick={() => AccordionHandler(index)}
              className="flex w-full items-center justify-between py-6"
            >
              <span>{item.title}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-3 w-3 text-gray-900 "
                >
                  {isActive === index ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  )}
                </svg>
              </span>
            </button>
          </h3>
          {isActive === index && (
            <div className="pb-6">
              <ul className="marker:text-green list-outside  list-disc pl-6">
                {item.content.map((content, index) => (
                  <li key={index} className="pl-2 text-gray-200">
                    <span className="text-gray-600">{content}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ProductAccordion;
