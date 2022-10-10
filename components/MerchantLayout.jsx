import React, { useContext, useState } from "react";
import Notify from "./Notify";
import { BsCartCheck } from "react-icons/bs";
import { DataContext } from "../store/globalState";
import Navbar from "./Navbar";

const MerchantLayout = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <div className="">
      <Navbar />
      {children}
      <Notify />
    </div>
  );
};

export default MerchantLayout;
