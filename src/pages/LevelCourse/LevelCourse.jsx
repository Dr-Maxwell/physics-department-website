/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirstLevel from "../../../src/image.jpg";
import level_2_Image from "../../../src/level-200.jpg";
import level_3_Image from "../../../src/level-300.jpg";
import Lastlevel from "../../../src/final.jpg";
import "./LevelCourse.css";
const LevelCourse = () => {
  const [message, setMessage] = useState("");
  const { level } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    switch (level) {
      case "100":
        setMessage("100");
        setData(FirstLevel);
        break;
      case "200":
        setMessage("200");
        setData(level_2_Image);
        break;
      case "300":
        setMessage("300");
        setData(level_3_Image);
        break;
      case "400":
        setMessage("400");
        setData(Lastlevel);
        break;
      default:
        break;
    }
  }, []);
  console.log(data);
  return (
    <>
      <div className="Wrapper">
        <div className="Wrapper_image">
          <img src={data} alt="image" />
        </div>
      </div>
    </>
  );
};

export default LevelCourse;
