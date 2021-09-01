import React from "react";
import { Button } from "../components/Button";
import { Nav } from "../components/Nav";
import classes from "./Header.module.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className={classes.ctaBtns}>
          <Button style={classes.btnLeft}>Start for Free</Button>
          <Button style={classes.btnRight}>Learn More</Button>
        </div>
      </div>
    </header>
  );
};
