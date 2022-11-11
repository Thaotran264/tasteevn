import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import NavComponent from "./Nav";
import ScrollToTopButton from "./ScrollToTopButton";
const Layout = ({ children }) => {
  return (
    <div className="position-relative d-flex flex-column gap-2 " style={{backgroundColor: '#EAEAEA'}}>
      <NavComponent />
      <main style={{marginTop: 48}}>{children}</main>
      <ScrollToTopButton />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Layout;
