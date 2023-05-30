/** @format */

import React from "react";
import "./About.css";
import AboutImage from "../../../../src/rotateImage.png";

const About = () => {
  return (
    <div className="header" id="about">
      <h3>
        ABOUT <span>DEPARTMENT</span>
      </h3>
      <div className="about_grid_template">
        <div className="grid_paragraph">
          <p>
            The Department of Physics, located in the Faculty of Physical
            Sciences(Skyway, Block 5), is one of the university's premier
            departments. The department offers both undergraduate and
            postgraduate programs in physics, including a Bachelor of Science
            (B.Sc.) degree in Physics, and Master of Science(M.Sc.) and Doctor
            of Philosophy(Ph.D.) degrees in various specializations. The
            department is staffed by experienced and dedicated lecturers who are
            passionate about teaching and research. The department is also
            equipped with state-of-the-art laboratories that enable students to
            carry out experiments and research in various areas of physics.
            Graduates from the department have gone on to pursue successful
            careers in academia, research, and industry.
          </p>
        </div>
        <div className="About_Image_Grid">
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
