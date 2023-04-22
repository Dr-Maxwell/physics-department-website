import React from "react";
import "./Hero.css";
import HomeImg from "./background.jpg";

const Hero = () => {
  return (
    <div className="Home" id="home">
      {" "}
      <img src={HomeImg} alt="" />
      <div className="Home-text">
        <h3>Exploring The Universe And Its Energy ...</h3>

        <a href="#about">
          <button>LEARN MORE</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
