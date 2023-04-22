import React from "react";
import Course from "./COURSES/Course";
import Career from "./Career/Career";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Career />
      <Course />
      <About />
      <Footer />
    </>
  );
};

export default Home;
