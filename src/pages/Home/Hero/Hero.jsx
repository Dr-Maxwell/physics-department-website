import React from "react";
import "./Hero.css";
import HomeImg from "./background.jpg";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div className="Home" id="home">
      {" "}
      <img src={HomeImg} alt="" />
      <div className="Home-text">
        <h1><Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Welcome To Department Of Physics.')
    .deleteAll()
    typewriter.typeString('Exploring The Universe And Its Energy ...')
      .pauseFor(1500)
      // onInit()
      .start();
      
  }}
/></h1>

        <a href="#about">
          <button>LEARN MORE</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
