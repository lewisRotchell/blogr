import React from "react";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Link from "next/link";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={classes.footer}>
      <nav className={classes.nav}>
        <div className={classes.imgContainer}>
          <Image src={Logo} width={101} height={40} />
        </div>
        <div className={classes.navGroup}>
          <p className={classes.navGroupTitle}>Product</p>
          <ul className={classes.navGroupList}>
            <li>
              <Link href="/">
                <a>Overview</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Marketplace</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Integrations</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.navGroup}>
          <p className={classes.navGroupTitle}>Company</p>
          <ul className={classes.navGroupList}>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Team</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Careers</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.navGroup}>
          <p className={classes.navGroupTitle}>Company</p>
          <ul className={classes.navGroupList}>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Newsletter</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>LinkedIn</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};
