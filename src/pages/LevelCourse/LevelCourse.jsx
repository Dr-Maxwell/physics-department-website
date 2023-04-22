import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirstLevel from "../../../src/image.jpg";
import level_2_Image from "../../../src/level-200.jpg";
import level_3_Image from "../../../src/level-300.jpg";
import Lastlevel from "../../../src/final.jpg";
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
      <div style={{ position: "relative", marginTop: "5rem", width: "100vw" }}>
        <div style={{ marginTop: "1.5rem", fontSize: "1.2rem" }}>
          {" "}
          {`${message} Level Course Outline `}
        </div>
        <div
          className="image"
          style={{ width: "100vw", height: "90vh", overflow: "scroll" }}
        >
          <img
            src={data}
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "-2rem",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LevelCourse;
