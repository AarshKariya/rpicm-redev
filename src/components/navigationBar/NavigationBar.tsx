import { motion } from "framer-motion";
import cx from "classnames";

import { FC,ReactElement } from "react";

import styles from "./NavigationBar.module.scss";
import NavLinks from "./navLinks/NavLinks";
import RpicmLogo from "./rpicmLogo/RpicmLogo";

type NavigationBarProps = {
  isOnLandingPage: boolean;
}

const NavigationBar:FC<NavigationBarProps> = ({isOnLandingPage}):ReactElement => {
  return (
    <motion.nav
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className={styles.navBar}
    >
      <RpicmLogo isOnLandingPage={isOnLandingPage}/>
      <NavLinks isOnLandingPage={isOnLandingPage}/>
    </motion.nav>
  );
};

export default NavigationBar;
