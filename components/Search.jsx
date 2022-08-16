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
      <div className="position-relative">
        <form
          onSubmit={handleSubmit}
          className="d-flex border border-light w-100 align-items-center justify-content-between"
        >
          <input
            placeholder="Search..."
            type="text"
            name="search"
            className="p-2 bg-secondary bg-opacity-10 text-light fs-2 w-75"
            style={{ border: "none", outline: "none" }}
          />
          <button
            className=" h-100 px-4"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <BsSearch style={{ color: "#fff" }} />
          </button>
        </form>
        <div
          className="bg-light w-100 h-100 position-absolute top-100 left-0"
          style={{ zIndex: 99 }}
        >
          <h5>Sản phẩm gợi ý</h5>
          <div className="row">
            <div className="col-4 overflow-hidden">
              <img
                className="w-25 h-50 d-block"
                src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-8">Iphone Se 2022</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Search;
