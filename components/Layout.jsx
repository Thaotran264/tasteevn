import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CarouselComponent from "./Carousel";
import Footer from "./Footer";
import NavComponent from "./Nav";
import Nav from "./Nav";
import Notify from "./Notify";
import ScrollToTopButton from "./ScrollToTopButton";
const Layout = ({ children }) => {
  return (
    <div className="position-relative">
      <NavComponent />
      <CarouselComponent />
      <Notify />
      <main>{children}</main>
      {/* <TabMenu /> */}
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
};

export default Layout;
