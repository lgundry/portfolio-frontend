import React from "react";

const VertComponent: React.FC = ({ style, children }) => {

  return (
    <div style={style} className="verticalSection">
      { children }
    </div>
  );
};

export default VertComponent;
