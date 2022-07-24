import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Infor from "./Infor";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Slide from "./Slider";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Infor />
      <Slide />
      <Menu />
      <Footer />
    </div>
  );
};

export default Layout;
