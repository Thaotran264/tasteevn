import React from "react";
import Footer from "./Footer";
import NavComponent from "./Nav";
import Nav from "./Nav";
import Notify from "./Notify";

const MerchantLayout = ({ children }) => {

  return (
    <div className="px-0">
      <NavComponent />
      {/* <Banner /> */}
      {children}
      <Notify />
      <Footer />
    </div>
  );
};

export default MerchantLayout;
