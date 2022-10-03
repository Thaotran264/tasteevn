import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import { isMobile } from "react-device-detect";
import { BsCartCheck, BsSearch } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/globalState";
import LoginModal from "./LoginModal";
import Search from "./Search";
import { cityApi } from "../api-client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth } from "../features/auth/authSlice";
import { searchApi } from "../api-client/search";
const Navbar = () => {
  // const { state, dispatch } = useContext(DataContext);
  const auth = useSelector(selectAuth)
  const {isLogged,authData} = auth
  console.log(auth)
  const dispatch = useDispatch();
  const [username, setusername] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [_isMobile, setMobile] = useState(false);
  const [cities, setCities] = useState([]);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  let userInfo = {};

  useEffect(() => {});

  useEffect(() => {
    setMobile(isMobile);
    // console.log('%cNavbar.jsx line:30 _isMobile', 'color: #007acc;', _isMobile);
  }, [_isMobile]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await cityApi.getCity();
        if (res) {
          setCities(res);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const handleSearch = () => {
    console.log("first");
    setShowSearch(!showSearch);
  };
  const handleSearchChange = (value) => {
    if (value) {
      setShowSearchForm(true);
      setSearchText(value);
    } else {
      setShowSearchForm(false);
    }
  };
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!searchText) return
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
  // const search = searchData?.filter((item) =>
  //   item.name.toLowerCase().includes(searchText.toLowerCase())
  // );
  return (
    <header
      className="bg-white position-fixed top-0 start-0 w-100 border border-bottom"
      style={{ zIndex: 99 }}
      id="nav"
    >
   
      <nav className="container">
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-2 col-sm-2 col-md-2 col-lg-2">
            <div>
              <div className="d-none showOnDesktop p-1">
                <Link href="/">
                  <Image
                    alt=""
                    src="/image/logo.jpg"
                    style={{ cursor: "pointer" }}
                    width={150}
                    height={60}
                  />
                </Link>
              </div>
              <div className="hideOnDesktop" style={{ aspectRatio: "1/1", padding: 5 }}>
                <Link href="/">
                  <Image
                    width={350}
                    height={150}
                    alt=""
                    src="/image/mobileLogo.jpg"
                    // className=" w-100 h-100"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Dropdown */}
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 ">
            <Dropdown>
              <Dropdown.Toggle
                className="border-0 rounded-0 border-warning border-bottom"
                id="dropdown-basic"
              >
                TP HCM
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ height: 400, overflow: "scroll-y" }}>
                {cities.map((item) => (
                  <Dropdown.Item key={item.id} href="#/action-1" value={item.id}>
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* Search Form */}
          <div className="col-2 col-sm-4 col-md-4 col-lg-6">
            <form
              className=" d-none border border-dark showOnDesktop rounded position-relative"
              role="search"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control text-dark"
                onChange={(e) => handleSearchChange(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
                type="search"
                aria-label="Search"
              />
              <button className="btn d-flex align-items-center" type="submit">
                <BsSearch style={{ color: "#000" }} />
              </button>
              {showSearchForm && (
                <div className="position-absolute w-100 p-2 top-100 border border-dark bg-light mt-2 rounded ">
                  {/* {
                    searchData?.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex align-items-center gap-2 border border-bottom my-1"
                      >
                        <Image width={80} height={80} alt="" src={item.image} />
                        <div>{item.name}</div>
                      </div>
                    ))
                  } */}
                  {
                    searchData.map(item => (
                      <div
                        key={item.id}
                        className="d-flex align-items-center gap-2 border border-bottom my-1"
                      >
                        {/* <Image width={80} height={80} alt="" src={item.image} /> */}
                        <div>{item.name}</div>
                      </div>
                    )
               
                    
              )}
              </div>
              )
              }
            </form>
            <button className="btn align-items-center hideOnDesktop" onClick={handleSearch}>
              <BsSearch style={{ color: "#000", fontSize: 18 }} />
            </button>
          </div>
          {/* CTA */}
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 cart-user d-none showOnDesktop">
            <div className="d-flex justify-content-around align-items-center w-100 align-items-center">
              <Link href="/cart">
                <a className="text-decoration-none d-flex align-items-center hideOnMobile">
                  <BsCartCheck style={{ fontSize: 24, color: "#000" }} />
                </a>
              </Link>

              {isLogged ? (
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-menu-align-responsive-1" className="border-0">
                    <div className="d-flex gap-1 align-items-center">
                      <span className="d-flex align-items-center"> {authData.fullName} </span>
                      <Image
                        alt=""
                        className="m-0 p-0"
                        style={{
                          borderRadius: "20px",
                          width: 40,
                          height: 40,
                        }}
                        width={50}
                        height={50}
                        src={
                          authData.avatar ||
                          "https://images.pexels.com/photos/8407039/pexels-photo-8407039.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        }
                      />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href={_isMobile ? "/profile" : "/profile-desktop"}>
                      Thông tin tài khoản
                    </Dropdown.Item>
                    <Dropdown.Item href="#">Đơn hàng</Dropdown.Item>
                    <Dropdown.Item href="#">Booking</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>Đăng xuất</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <LoginModal />
              )}
            </div>
          </div>
        </div>
      </nav>
      {showSearch && <Search showSearch={showSearch} setShowSearch={setShowSearch} />}
    </header>
  );
};

export default Navbar;
