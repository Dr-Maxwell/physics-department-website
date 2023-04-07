import React from "react";
import { useNavigate } from "react-router-dom";

function Level(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${props.Route}`)}
      className="level_component"
    >
      <h2>{props.myLevel}</h2>
    </div>
  );
}

export default Level;
