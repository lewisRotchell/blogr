import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/Blogr-logo.svg";
import Hamburger from "../public/images/icon-hamburger.svg";
import Close from "../public/images/icon-close.svg";
import classes from "./Nav.module.scss";
import ArrowLight from "../public/images/arrow-light.svg";
import { Button } from "./Button";
import MobileNav from "./MobileNav";
import { NavSubMenu } from "./NavSubMenu";

interface NavProps {}

interface ISubMenu {
  product: boolean;
  company: boolean;
  connect: boolean;
}

export const Nav: React.FC<NavProps> = ({}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [subMenu, setSubMenu] = useState<ISubMenu>({
    product: false,
    company: false,
    connect: false,
  });

  console.log(subMenu);

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
            <li
              onMouseEnter={() =>
                setSubMenu({
                  product: true,
                  company: false,
                  connect: false,
                })
              }
              onMouseLeave={() =>
                setSubMenu({
                  product: false,
                  company: false,
                  connect: false,
                })
              }
              className={classes.navItem}
            >
              <span className={classes.navItemText}>Product</span>
              <div
                className={`${classes.arrowContainer} ${
                  subMenu.product ? classes.flipArrow : ""
                }`}
              >
                <Image src={ArrowLight} width={12} height={8} />
              </div>

              <NavSubMenu
                open={subMenu.product}
                menuItems={[
                  "Overview",
                  "Pricing",
                  "Marketplace",
                  "Features",
                  "Integrations",
                ]}
              />
            </li>
            <li
              onMouseEnter={() =>
                setSubMenu({
                  product: false,
                  company: true,
                  connect: false,
                })
              }
              onMouseLeave={() =>
                setSubMenu({
                  product: false,
                  company: false,
                  connect: false,
                })
              }
              className={classes.navItem}
            >
              <span className={classes.navItemText}>Company</span>
              <div
                className={`${classes.arrowContainer} ${
                  subMenu.company ? classes.flipArrow : ""
                }`}
              >
                <Image src={ArrowLight} width={12} height={8} />
              </div>
              <NavSubMenu
                open={subMenu.company}
                menuItems={["About", "Team", "Blog", "Careers"]}
              />
            </li>

            <li
              onMouseEnter={() =>
                setSubMenu({
                  product: false,
                  company: false,
                  connect: true,
                })
              }
              onMouseLeave={() =>
                setSubMenu({
                  product: false,
                  company: false,
                  connect: false,
                })
              }
              className={classes.navItem}
            >
              <span className={classes.navItemText}>Connect</span>
              <div
                className={`${classes.arrowContainer} ${
                  subMenu.connect ? classes.flipArrow : ""
                }`}
              >
                <Image src={ArrowLight} width={12} height={8} />
              </div>
              <NavSubMenu
                open={subMenu.connect}
                menuItems={["Contact", "Newsletter", "LinkedIn"]}
              />
            </li>
          </ul>
        </div>

        <div className={classes.navGroupB}>
          <span className={classes.loginText}>Login</span>
          <Button style={classes.signUpBtn}>Sign Up</Button>
        </div>

        <button
          className={`${classes.hamburgerBtn} ${!showMenu ? classes.show : ""}`}
          aria-expanded="false"
          aria-label="menu"
          onClick={handleClick}
        >
          <Image width={32} height={18} src={Hamburger} alt={""} />
        </button>

        <button
          className={`${classes.closeBtn} ${showMenu ? classes.show : ""}`}
          aria-expanded="true"
          aria-label="menu"
          onClick={handleClick}
        >
          <Image width={24} height={24} src={Close} alt={""} />
        </button>
      </nav>
      <MobileNav showMenu={showMenu} />
    </>
  );
};
