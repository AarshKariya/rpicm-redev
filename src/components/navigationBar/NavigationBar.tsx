import styles from "./NavigationBar.module.scss";
import NavLinks from "./navLinks/NavLinks";
import RpicmLogo from "./rpicmLogo/RpicmLogo";
import { motion } from "framer-motion";

const NavigationBar: React.FC = () => {
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
      <RpicmLogo />
      <NavLinks />
    </motion.nav>
  );
};

export default NavigationBar;
