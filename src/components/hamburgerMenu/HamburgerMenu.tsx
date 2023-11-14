import { forwardRef } from "react";
import styles from "./HamburgerMenu.module.scss";
import Magnetic from "@/components/magnetic/Magnetic";

const HamburgerMenu = forwardRef(function HamburgerMenu(props, ref) {
  return (
    <div className={styles.header}>
      <Magnetic>
        <div className={styles.burger}>
          <div ref={ref} className={styles.bounds}></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default HamburgerMenu;
