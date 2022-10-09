import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notify from "./Notify";
import Search from "./Search";
import TabMenu from "./TabMenu";
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children }) => {
  return (
    <div className="position-relative">
      {/* <Search /> */}
      <Navbar />
      <Notify />
      <main style={{ marginTop: 75 }}>{children}</main>
      {/* <TabMenu /> */}
      <ToastContainer />
    </div>
  );
};

export default Layout;
