import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="items-top relative flex min-h-screen justify-center bg-gray-100 sm:items-center sm:pt-0">
        <div className="mx-auto max-w-xl sm:px-6 lg:px-8">
          <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
            <div className="border-r border-gray-400 px-4 text-lg tracking-wider text-gray-500">
              404
            </div>
            <div className="ml-4 text-lg uppercase tracking-wider text-gray-500">
              Not Found
            </div>
          </div>
          <div className="flex items-center justify-center pt-8 sm:pt-0">
            <Link to={"/"} className="my-3 border-b border-slate-400 lowercase">
              <span className="text-gray-500">back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
