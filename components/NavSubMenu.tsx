import React from "react";
import classes from "./NavSubMenu.module.scss";
import Link from "next/link";

interface NavSubMenuProps {
  menuItems: string[];
  open: boolean;
}

export const NavSubMenu: React.FC<NavSubMenuProps> = ({ menuItems, open }) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.subMenu} ${open ? classes.showMenu : ""}`}>
        <ul className={classes.subMenuList}>
          {menuItems.map((item: string, index: number) => (
            <li key={index}>
              <Link href="/">
                <a>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
