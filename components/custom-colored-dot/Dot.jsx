import { useState } from "react";
import "./index.css";
const Dot = ({ color, index }) => {
  const [active, setActive] = useState(null);

  console.log(color, "color");

  const btnClicked = (id) => {
    setActive(index);
    console.log(id);
  };
  console.log(active);

  return (
    <div
      className={`colored_dot ${active ? "active" : ""}`}
      style={{
        backgroundColor: color,
      }}
      onClick={() => btnClicked(index)}
    />
  );
};

export default Dot;
