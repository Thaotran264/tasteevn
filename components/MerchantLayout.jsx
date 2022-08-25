import React, { useContext, useState } from "react";
import Notify from "./Notify";
import { BsCartCheck } from "react-icons/bs";
import { DataContext } from "../store/globalState";

const MerchantLayout = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <div className="bg-dark bg-opacity-10">
      {children}
      <Notify />
    </div>
  );
};

export default MerchantLayout;
