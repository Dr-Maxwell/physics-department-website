import React from "react";
import "./Footer.css";
import {
  FaLink,
  FaTelegram,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useAuth } from "../../../contexts/AuthContext";

const Footer = () => {
  const {role, isLoggedIn} = useAuth();
  console.log(role);

  return (
    <div className="Footer" id="material">
      <div className="footer-child-one">
        <span>MATERIALs {<FaLink />}</span>

        <div className="links">
          <ul>
            <li>
              <a href="https://t.me/naps100L">100 level</a>
            </li>
            <li>
              <a href="https://t.me/naps200L">200 level</a>
            </li>
            <li>
              <a href="https://t.me/naps300L">300 level</a>
            </li>
            <li>
              <a href="https://t.me/naps400L">400 level</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-child-two">
        <span>MENU</span>
        <div className="menu-list">
          {" "}
          <ul>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#career">Career</a>
            </li>
            <li>
              <a href="/#course">Courses</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#material">Materials</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-child-three">
        <span>SOCIALS</span>
        <div className="socials">
          <span>
            <a href="">
              <FaFacebook />
            </a>
          </span>
          <span>
            <a href="">
              <FaTwitter />
            </a>
          </span>
          <span>
            <a href="">
              <FaTelegram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
