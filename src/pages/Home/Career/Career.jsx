import React from "react";
import "./Career.css";
import Slider from "./Slider";
console.log(window.addEventListener("scrollX", checkSize));
function checkSize(e) {
  console.log(e);
}
const Career = () => {
  return (
    <div className="Career-list" id="career">
      <div className="career-heading">
        <h2>
          PHYSICS <span>CAREERS</span>
        </h2>
        <h3>Here are some list of career choice in physics.</h3>
      </div>
      <div className="career-contents">
        <Slider />
      </div>
    </div>
  );
};

export default Career;
