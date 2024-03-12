import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Details from "../Details/Details";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Details />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
