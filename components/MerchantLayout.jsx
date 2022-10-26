import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Notify from "./Notify";

const MerchantLayout = ({ children }) => {

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
