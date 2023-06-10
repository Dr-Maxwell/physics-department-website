/** @format */

import React from "react";
import { useState, useEffect } from "react";
import "./Footer.css";
import { FaLink, FaTelegram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [Year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().toISOString().slice(0, 4));
  }, [Year]);

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
            <a href="https://web.facebook.com/napsites.unilorin/">
              <FaFacebook />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/NapsUnilorin?s=20&t=8luNSjTzfHM9ApweOexwnw">
              <FaTwitter />
            </a>
          </span>
          <span>
            <a href="https://t.me/+nmDcq54w261mNzQ0">
              <FaTelegram />
            </a>
          </span>
        </div>
      </div>
      <section className="copyright">
        <h3>
          Developed by <a href="https://github.com/Dr-Maxwell">SpiderX</a> ||
          Newton's Adminstration.
        </h3>
        <h3>
          &copy;{Year} Department Of Physics, University Of Ilorin. All right
          reserved.
        </h3>
      </section>
    </div>
  );
};

export default Footer;
