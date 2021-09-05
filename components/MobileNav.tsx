import { Button } from "./Button";
import classes from "./MobileNav.module.scss";
import Image from "next/image";
import ArrowLight from "../public/images/arrow-light.svg";
import ArrowDark from "../public/images/icon-arrow-dark.svg";
import { MobileSubMenu } from "./MobileSubMenu";

interface MobileNavProps {
  showMenu: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ children, showMenu }) => {
  return (
    <div className={`${classes.mobileNav} ${showMenu ? classes.showMenu : ""}`}>
      <nav>
        <button className={classes.navButton}>
          Product
          <div className={classes.arrowContainer}>
            <Image src={ArrowDark} width={10} height={6} />
          </div>
        </button>
        <MobileSubMenu
          menuItems={[
            "Overview",
            "Pricing",
            "Marketplace",
            "Features",
            "Integrations",
          ]}
        />
        <button className={classes.navButton}>
          Company{" "}
          <div className={classes.arrowContainer}>
            <Image src={ArrowDark} width={10} height={6} />
          </div>
        </button>
        <button className={classes.navButton}>
          Connect{" "}
          <div className={classes.arrowContainer}>
            <Image src={ArrowDark} width={10} height={6} />
          </div>
        </button>
        <span className={classes.loginText}>Login</span>
        <Button style={classes.signUpBtn}>Sign Up</Button>
      </nav>
    </div>
  );
};

export default MobileNav;
