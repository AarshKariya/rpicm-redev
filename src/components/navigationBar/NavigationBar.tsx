import { motion } from "framer-motion";
import { ReactElement } from "react";

import styles from "./NavigationBar.module.scss";
import NavLinks from "./navLinks/NavLinks";
import RpicmLogo from "./rpicmLogo/RpicmLogo";
import { NextPage } from "next";

type NavigationBarProps = {
  isOnLandingPage: boolean;
};

const NavigationBar: NextPage<NavigationBarProps> = ({
  isOnLandingPage,
}): ReactElement => {
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
      <RpicmLogo isOnLandingPage={isOnLandingPage} />
      <NavLinks isOnLandingPage={isOnLandingPage} />
    </motion.nav>
  );
};

export default NavigationBar;
