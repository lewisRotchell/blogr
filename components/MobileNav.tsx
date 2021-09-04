import { Button } from "./Button";
import classes from "./MobileNav.module.scss";
import Image from "next/image";
import ArrowLight from "../public/images/arrow-light.svg";

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = ({ children }) => {
  return (
    <div className={classes.mobileNav}>
      <nav>
        <button>
          Product <Image src={ArrowLight} width={12} height={8} />
        </button>
        <button>Company</button>
        <button>Connect</button>
        <span className={classes.loginText}>Login</span>
        <Button style={classes.signUpBtn}>Sign Up</Button>
      </nav>
    </div>
  );
};

export default MobileNav;
