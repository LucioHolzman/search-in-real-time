import React, { useContext } from "react";
import { API_CONTEXT } from "../../context";
const Search = () => {
  const { setSearch } = useContext(API_CONTEXT);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className=" w-full flex flex-col justify-end h-32 items-center">
      <div className="mb-4 flex items-end">
        <a href="/">
          <img
            className="w-12 top-4 left-4 transform rotate-45"
            src="clock.png"
            alt=""
          />
        </a>
        <h1 className=" text-2xl font-light text-gray-600 ">
          Search images in real time
        </h1>
      </div>
      <form onSubmit={onSubmit} className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 selected-svg text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          autoFocus
          maxLength="20"
          className="pl-1 text-gray-500 font-light border-gray w-80 border-b-2 outline-none"
          onChange={e => setSearch(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Search;
