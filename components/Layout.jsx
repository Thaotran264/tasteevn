import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notify from "./Notify";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <Carousel /> */}
      {/* <Infor /> */}
      {/* <Slide /> */}
      {/* <Menu /> */}
      {/* <Footer /> */}
      <Notify />
      <main style={{ marginTop: 86 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
