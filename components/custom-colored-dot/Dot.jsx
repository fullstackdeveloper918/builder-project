import { useState } from "react";
import "./index.css";
const Dot = ({ color }) => {
  const [outline, setOutline] = useState(false);

  const btnClicked = (index) => {
    setOutline(true);
    console.log(index);
  };

  return (
    <div
      className={`colored_dot ${outline ? "active" : ""}`}
      style={{ outlineColor: color }}
      onClick={() => btnClicked(color.id)}
    />
  );
};

export default Dot;
