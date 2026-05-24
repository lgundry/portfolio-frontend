import React from "react";
import "./section.css"

const HorComponent: React.FC = ({ style, children }) => {
  return (
    <div style={style} className="horizontalSection"> 
      {children}
    </div>
  );
};

export default HorComponent;
