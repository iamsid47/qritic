import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "../Common/Hero";
import Footer from "../Common/Footer";
import CTA from "./HomeSec/CTA";
import Benefits from "./HomeSec/Benefits";
import Content from "./HomeSec/Content";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />

      <Benefits />
      <Content />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
