import React from "react";
import NextLink from "next/link";
import styles from "../NavigationBar.module.scss";

const NavLinks: React.FC = () => {
  return (
    <div className={styles.tabs}>
      <NextLink href="/about">
        <span className={styles.tabLink}>About</span>
      </NextLink>
      <NextLink href="/courses">
        <span className={styles.tabLink}>Courses</span>
      </NextLink>
      <NextLink href="/centres">
        <span className={styles.tabLink}>Centers</span>
      </NextLink>
      <NextLink href="/blogs">
        <span className={styles.tabLink}>Blog</span>
      </NextLink>
    </div>
  );
};

export default NavLinks;
