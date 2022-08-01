import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Infor from "./Infor";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Notify from "./Notify";
import Slide from "./Slider";

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
      {children}
    </div>
  );
};

export default Layout;
