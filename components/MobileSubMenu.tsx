import React from "react";
import classes from "./MobileSubMenu.module.scss";
import Link from "next/link";

interface MobileSubMenuProps {
  menuItems: string[];
  open: boolean;
}

export const MobileSubMenu: React.FC<MobileSubMenuProps> = ({
  menuItems,
  open,
}) => {
  return (
    <div className={`${classes.mobileSubMenu} ${open ? classes.showMenu : ""}`}>
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
