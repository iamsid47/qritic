import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import WhqHero from "../Common/WhqHero";
import CTA from "../Pages/HomeSec/CTA";

const WhyQritic = () => {
  const handleFile = (file) => {
    console.log("File uploaded:", file);
  };
  return (
    <section>
      <Navbar />
      <WhqHero handleFile={handleFile} />
      <CTA />
      <Footer />
    </section>
  );
};

export default WhyQritic;
