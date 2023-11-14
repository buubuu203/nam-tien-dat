import React from "react";
import News from "../components/News";
import MultiCarousel from "../components/MultiCarousel";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ContactSpeedDial from "../components/ContactSpeedDial";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MultiCarousel />
      <ContactSpeedDial />
      <Newsletter />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
