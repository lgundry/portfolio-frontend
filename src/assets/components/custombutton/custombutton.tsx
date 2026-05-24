import React from "react";
import "./custombutton.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) => {
  return (
    <button className="custom-button" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
