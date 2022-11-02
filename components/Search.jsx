import Image from "next/image";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { searchApi } from "../api-client/search";

const Search = ({ showSearch, setShowSearch }) => {
  const [searchText, setSearchText] = useState('')
  const [showSearchForm, setShowSearchForm] = useState(false)
  const [searchData, setSearchData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setShowSearchForm(true)
    if (!searchText) return
    let formData = new FormData();
    formData.append("Name", searchText);
    try {
      const res = await searchApi.searchProduct(formData);
      console.log(res.data.data);
      if (res.successful && res.data) {
        setSearchData(res.data.data);
      }
      setSearchText('')
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearchChange = (value) => {
    if (value) {
      setSearchText(value)
      setShowSearchForm(true)
    }
    else {
      setShowSearchForm(false)
    }
  }
  const handleClick = () => {
    // setShowSearch(!showSearch);
    setSearchText('')
  };

  const data = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/12346579/pexels-photo-12346579.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Cơm chiên dương châu'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/13538314/pexels-photo-13538314.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Cơm chay thập cẩm'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/13636706/pexels-photo-13636706.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Mì Tomyum Bò Úc'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/13629371/pexels-photo-13629371.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Mì Tomyum Bò Mĩ'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/10819066/pexels-photo-10819066.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Bò kho bánh mì'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/12788117/pexels-photo-12788117.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Phở Hà Nội'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/13636706/pexels-photo-13636706.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Phở Bắc'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/13629371/pexels-photo-13629371.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      name: 'Mì Quảng'
    },
  ]
  // const search = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())).slice(0,5)

  return (
    <section
      className="position-fixed bg-dark bg-opacity-75 start-0 top-0 bottom-0 w-100 h-100"
      style={{ zIndex: 999 }}
    >
      <div className="position-relative h-100">
        <form
          onSubmit={handleSubmit}
          className="d-flex w-100 bg-light align-items-center justify-content-between mb-2"
        >
          <input
            placeholder="Search..."
            type="text"
            name="search"
            className="p-2  w-100"
            style={{ border: "none", outline: "none" }}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="border-0 px-4 py-2" htmlType='submit'>
            <BsSearch />
          </button>
        </form>
        {
          showSearchForm &&
          <div
            className="bg-light w-100 mt-2 p-2 rounded mb-2"
            style={{ zIndex: 99 }}
          >
            {
              searchData.map(item =>
                <div className="d-flex align-items-center gap-2 mb-2 border border-bottom" key={item.id}>
                  {/* <Image
              width={80}
              height={80}
              className="rounded"
              src={item.image}
              alt=""
            /> */}
                  <p className="mb-0">{item.name}</p>
                </div>

              )}
          </div>
        }
        <button className="border-0 w-100 py-2 rounded bg-danger text-light " onClick={handleClick}>Đóng</button>
      </div>
    </section>
  );
};

export default Search;
