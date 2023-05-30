/** @format */

import React from "react";
import "./Course.css";
import Level from "./Level";
const Course = () => {
  return (
    <div className="courses" id="course">
      <h2>
        OUR <span>COURSES</span>
      </h2>
      <h3>List of courses available to the students of physics department.</h3>
      <div className="Levels_Container">
        <div className="Each_Level_Component">
          <Level myLevel=" 100L" Route="levels/100" />
        </div>
        <div className="Each_Level_Component">
          {" "}
          <Level myLevel=" 200L" Route="levels/200" />
        </div>
        <div className="Each_Level_Component">
          {" "}
          <Level myLevel=" 300L" Route="levels/300" />
        </div>
        <div className="Each_Level_Component">
          <Level myLevel=" 400L" Route="levels/400" />
        </div>
      </div>
    </div>
  );
};

export default Course;
