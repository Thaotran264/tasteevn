import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CarouselComponent from "./Carousel";
import Footer from "./Footer";
import Nav from "./Nav";
import Notify from "./Notify";
const Layout = ({ children }) => {
  return (
    <div className="position-relative">
      <Nav />
      <CarouselComponent />
      <Notify />
      <main>{children}</main>
      {/* <TabMenu /> */}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
