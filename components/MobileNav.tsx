import { useState } from "react";
import { Button } from "./Button";
import classes from "./MobileNav.module.scss";
import Image from "next/image";
import ArrowLight from "../public/images/arrow-light.svg";
import ArrowDark from "../public/images/icon-arrow-dark.svg";
import { MobileSubMenu } from "./MobileSubMenu";

interface MobileNavProps {
  showMenu: boolean;
}

interface ISubMenu {
  product: boolean;
  company: boolean;
  connect: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ children, showMenu }) => {
  const [subMenu, setSubMenu] = useState<ISubMenu>({
    product: false,
    company: false,
    connect: false,
  });

  return (
    <div className={`${classes.mobileNav} ${showMenu ? classes.showMenu : ""}`}>
      <nav>
        <button
          className={classes.navButton}
          onClick={() =>
            setSubMenu({
              ...subMenu,
              product: !subMenu.product,
            })
          }
        >
          Product
          <div
            className={`${classes.arrowContainer} ${
              subMenu.product ? classes.flipArrow : ""
            }`}
          >
            <Image src={ArrowDark} width={10} height={6} alt={"arrow"} />
          </div>
        </button>
        <MobileSubMenu
          open={subMenu.product}
          menuItems={[
            "Overview",
            "Pricing",
            "Marketplace",
            "Features",
            "Integrations",
          ]}
        />

        <button
          onClick={() =>
            setSubMenu({
              ...subMenu,
              company: !subMenu.company,
            })
          }
          className={classes.navButton}
        >
          Company{" "}
          <div
            className={`${classes.arrowContainer} ${
              subMenu.company ? classes.flipArrow : ""
            }`}
          >
            <Image src={ArrowDark} width={10} height={6} alt={"arrow"} />
          </div>
        </button>
        <MobileSubMenu
          open={subMenu.company}
          menuItems={["About", "Team", "Blog", "Careers"]}
        />

        <button
          onClick={() =>
            setSubMenu({
              ...subMenu,
              connect: !subMenu.connect,
            })
          }
          className={classes.navButton}
        >
          Connect{" "}
          <div
            className={`${classes.arrowContainer} ${
              subMenu.connect ? classes.flipArrow : ""
            }`}
          >
            <Image src={ArrowDark} width={10} height={6} alt={"arrow"} />
          </div>
        </button>
        <MobileSubMenu
          open={subMenu.connect}
          menuItems={["Contact", "Newsletter", "LinkedIn"]}
        />
        <div className={classes.loginAndSignUpContainer}>
          <span className={classes.loginText}>Login</span>
          <Button style={classes.signUpBtn}>Sign Up</Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
