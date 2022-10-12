import React, { useContext, useState } from "react";
import Notify from "./Notify";
import { BsCartCheck } from "react-icons/bs";
import { DataContext } from "../store/globalState";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Banner from "./Banner";

const MerchantLayout = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <div className="px-0">
      <Nav />
      {/* <Banner /> */}
      {children}
      <Notify />
      <Footer />
    </div>
  );
};

export default MerchantLayout;
