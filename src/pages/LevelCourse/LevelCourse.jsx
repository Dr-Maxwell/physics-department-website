import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirstLevel from "../../../src/image.jpg";
import level_2_Image from "../../../src/level-200.jpg";
import level_3_Image from "../../../src/level-300.jpg";
import Lastlevel from "../../../src/final.jpg";
const LevelCourse = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const { level } = useParams();
  const image = [
    { id: 100, Image: FirstLevel },
    { id: 200, Image: level_2_Image },
    { id: 300, Image: level_3_Image },
    { id: 400, Image: Lastlevel },
  ];
  const displayImage = image.filter((img) => level == img.id);
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
      <div style={{ position: "relative", marginTop: "7rem", width: "100vw" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>
          {" "}
          {`${message}l Course Outline `}
        </h2>
        <img
          src={displayImage.Image}
          alt="image"
          style={{
            width: "100vw",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </div>
    </>
  );
};

export default LevelCourse;
