import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import WhqHero from "../Common/WhqHero";

const WhyQritic = () => {
  const handleFile = (file) => {
    console.log("File uploaded:", file);
  };
  return (
    <section>
      <Navbar />
      <WhqHero handleFile={handleFile} />
      <Footer />
    </section>
  );
};

export default WhyQritic;
