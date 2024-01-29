import { useState } from "react";
import "./index.css";
const Dot = ({ color, activeColor, setActiveColor }) => {
  const [outline, setOutline] = useState(false);

  const btnClicked = () => {
    setActiveColor(color);
  };
  console.log(active);

  return (
    <div
      className={`colored_dot ${color === activeColor ? "active" : ""}`}
      style={{ background: color }}
      onClick={btnClicked}
    />
  );
};

export default Dot;
