import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { level_1_Image } from "../../../src/level-100.jpg";
import { level_2_Image } from "../../../src/level-200.jpg";
import { level_3_Image } from "../../../src/level-300.jpg";
import { level_4_Image } from "../../../src/final-year.jpg";

const LevelCourse = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const { level } = useParams();

  useEffect(() => {
    switch (level) {
      case "100":
        setMessage("100");
        break;
      case "200":
        setMessage("200");
        break;
      case "300":
        setMessage("300");
        break;
      case "400":
        setMessage("400");
        break;
      default:
        break;
    }
  }, []);

  //   console.log(param.level);

  return (
    <>
      <div style={{ position: "relative", marginTop: "7rem" }}>
        <h2 style={{ marginBottom: "3rem" }}>
          {" "}
          {`${message}l Course Outline `}
        </h2>

        <img src={level_1_Image} alt="image" />
        <h3>Image suppose e here</h3>
      </div>
    </>
  );
};

export default LevelCourse;
