import React, { useState } from "react";
import logo from "../../src/logo.png";
import "./MyNav/Nav.css";
import { FaTwitter, FaBars, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const [display, setdisplay] = useState(false);
  const isMobile = window.innerWidth < 900;
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
          isMobile
            ? display
              ? "second-nav-ele"
              : "hideDisplay"
            : "second-nav-ele"
        }
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
            <a href="/#home">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="third-nav-ele">
        <div className="icons">
          <i>
            <FaFacebook />
          </i>
          <i>
            <FaTwitter />
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
