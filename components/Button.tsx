import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children: string;
  style?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button className={`${classes.button} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};
