/** @format */

import React, { useState, useEffect } from "react";
import logo from "../../src/logo.png";
import "./MyNav/Nav.css";
import { FaTwitter, FaBars, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const [display, setdisplay] = useState(true);
  const [isMobile, setisMobile] = useState();

  useEffect(() => {
    setisMobile(window.innerWidth);
  });

  // function DisplayNavFunc() {
  //   let className =
  // }

  return (
    <div className="my-nav-component">
      <div onClick={() => navigate("/")} className="first-nav-ele">
        <div className="image">
          <img src={logo} alt="Logo" />
        </div>
        <div className="dept-name">
          <span>Department</span> <br />
          <span>Of Physics</span>
        </div>
      </div>

      <div
        className={
          isMobile < 900
            ? display
              ? "second-nav-ele"
              : "ShowDisplay"
            : "second-nav-ele"
        }
        onClick={() => setdisplay(true)}
      >
        <ul>
          <li>
            <a href="/#home">HOME</a>
          </li>
          <li>
            <a href="/#career">CAREER</a>
          </li>
          <li>
            <a href="/#course">COURSES</a>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            <a href="/#material">MATERIALs</a>
          </li>
        </ul>
      </div>
      <div className="third-nav-ele">
        <div className="icons">
          <i>
            <a href="https://web.facebook.com/napsites.unilorin/">
              <FaFacebook />
            </a>
          </i>
          <i>
            <a href="https://twitter.com/NapsUnilorin?s=20&t=8luNSjTzfHM9ApweOexwnw">
              {" "}
              <FaTwitter />{" "}
            </a>
          </i>
        </div>
        <div className="task">
          <button onClick={() => setdisplay(!display)}>
            <i>
              <FaBars />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
