import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notify from "./Notify";
import Search from "./Search";
const Layout = ({ children }) => {
  return (
    <div>
      {/* <Search /> */}
      <Navbar />
      <Notify />
      <main style={{ marginTop: 86 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
