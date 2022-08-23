import React from "react";
import Notify from "./Notify";

const MerchantLayout = ({ children }) => {
  return (
    <div className="bg-dark bg-opacity-10">
      {children}
      <Notify />
    </div>
  );
};

export default MerchantLayout;
