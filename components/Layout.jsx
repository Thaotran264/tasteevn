import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notify from "./Notify";
import Search from "./Search";
import TabMenu from "./TabMenu";
const Layout = ({ children }) => {
  return (
    <div className="position-relative">
      {/* <Search /> */}
      <Navbar />
      <Notify />
      <main style={{ marginTop: 86 }}>{children}</main>
      <Footer />
      <TabMenu />
    </div>
  );
};

export default Layout;
