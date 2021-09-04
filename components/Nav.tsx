import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/Blogr-logo.svg";
import Hamburger from "../public/images/icon-hamburger.svg";
import classes from "./Nav.module.scss";
import ArrowLight from "../public/images/arrow-light.svg";
import { Button } from "./Button";
import MobileNav from "./MobileNav";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.navGroupA}>
          <div className={classes.imgContainer}>
            <Image layout={"responsive"} src={Logo} alt={"blogr"} />
          </div>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <span className={classes.navItemText}>Product</span>
              <Image src={ArrowLight} width={12} height={8} />
            </li>
            <li className={classes.navItem}>
              <span className={classes.navItemText}>Company</span>
              <Image src={ArrowLight} width={12} height={8} />
            </li>
            <li className={classes.navItem}>
              <span className={classes.navItemText}>Connect</span>
              <Image src={ArrowLight} width={12} height={8} />
            </li>
          </ul>
        </div>

        <div className={classes.navGroupB}>
          <span className={classes.loginText}>Login</span>
          <Button style={classes.signUpBtn}>Sign Up</Button>
        </div>

        <button
          className={classes.hamburgerBtn}
          aria-expanded="false"
          aria-label="menu"
          onClick={handleClick}
        >
          <Image width={32} height={18} src={Hamburger} alt={""} />
        </button>
      </nav>
      {showMenu && <MobileNav />}
    </>
  );
};
