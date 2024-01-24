import "./index.css";
const Dot = ({color}) => {
  console.log('color', color)
  return(
 <div className="colored_dot" style={{background: color}}/>
  )
 
};

export default Dot;
