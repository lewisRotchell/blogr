import React from "react";
import classes from "./MobileSubMenu.module.scss";
import Link from "next/link";

interface MobileSubMenuProps {
  menuItems: string[];
}

export const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ menuItems }) => {
  return (
    <div className={classes.mobileSubMenu}>
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
  );
};
