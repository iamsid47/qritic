import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import SideNav from "./SideNav";
import { useAuth } from "../Auth/AuthContext";

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <section>
      <Navbar />
      {user ? (
        <div className="flex">
          <div className="hidden md:inline">
            <SideNav />
          </div>
          <div className="bg-white w-full px-8">{children}</div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col text-white bg-sky-700 items-center mx-auto justify-center space-y-8">
          <p className="text-center text-2xl">
            You are not logged in
            <span className="text-4xl font-medium px-3">:&#40;</span>
          </p>
          <a href="/login" className="secondarybtn">
            Login &rarr;
          </a>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Layout;
