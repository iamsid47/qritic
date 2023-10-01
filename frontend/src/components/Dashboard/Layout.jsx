import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <div className="flex">
        <div className="hidden md:inline">
          <SideNav />
        </div>
        <div className="bg-white w-full px-8">{children}</div>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
