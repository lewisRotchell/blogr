import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Hamburger from "../public/images/icon-hamburger.svg";
import classes from "./Nav.module.scss";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav className={classes.nav}>
      <Image width={88.6} height={32} src={Logo} alt={"blogr"} />
      <button
        className={classes.hamburgerBtn}
        aria-expanded="false"
        aria-label="menu"
      >
        <Image width={32} height={18} src={Hamburger} alt={""} />
      </button>
    </nav>
  );
};
