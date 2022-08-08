import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ showSearch, setShowSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    console.log("first");
    setShowSearch(!showSearch);
  };
  return (
    <div
      className="position-fixed bg-dark bg-opacity-75 top-0 bottom-0 d-flex
    align-items-center justify-content-center flex-column w-100 h-100"
      style={{ zIndex: 999 }}
    >
      <button
        className="btn btn-outline-danger position-absolute"
        style={{ top: 15, right: 15 }}
        onClick={handleClick}
      >
        x
      </button>
      <form
        onSubmit={handleSubmit}
        className="d-flex border border-light w-75 justify-content-between"
      >
        <input
          placeholder="Search..."
          type="text"
          name="search"
          className="p-2 bg-secondary bg-opacity-10 text-light fs-2 w-75"
          style={{ border: "none", outline: "none" }}
        />
        <button className=" h-100 px-4" style={{ backgroundColor: "transparent", border: "none" }}>
          <BsSearch style={{ color: "#fff" }} />
        </button>
      </form>
    </div>
  );
};

export default Search;
