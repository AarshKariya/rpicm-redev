import { FC, ReactElement } from "react";
import cx from "classnames";
import NextLink from "next/link";

import styles from "../NavigationBar.module.scss";

type NavLinksProps = {
  isOnLandingPage: boolean;
};

const NavLinks: FC<NavLinksProps> = ({ isOnLandingPage }): ReactElement => {
  return (
    <div className={styles.tabs}>
      <NextLink href="/about">
        <span
          className={cx(
            styles.tabLink,
            !isOnLandingPage && styles.tabLinkOnOtherScreens
          )}
        >
          About
        </span>
      </NextLink>
      <NextLink href="/courses">
        <span
          className={cx(
            styles.tabLink,
            !isOnLandingPage && styles.tabLinkOnOtherScreens
          )}
        >
          Courses
        </span>
      </NextLink>
      <NextLink href="/centres">
        <span
          className={cx(
            styles.tabLink,
            !isOnLandingPage && styles.tabLinkOnOtherScreens
          )}
        >
          Centers
        </span>
      </NextLink>
      <NextLink href="/gallery">
        <span
          className={cx(
            styles.tabLink,
            !isOnLandingPage && styles.tabLinkOnOtherScreens
          )}
        >
          Gallery
        </span>
      </NextLink>
      {/* <NextLink href="/blogs">
        <span
          className={cx(
            styles.tabLink,
            !isOnLandingPage && styles.tabLinkOnOtherScreens
          )}
        >
          Blog
        </span>
      </NextLink> */}
      <NextLink href="/enquiry">
        <span
          className={cx(
            styles.tabLink,
            !isOnLandingPage && styles.tabLinkOnOtherScreens
          )}
        >
          Enquiry
        </span>
      </NextLink>
      <NextLink href="/recognition">
        <span
          className={cx(
            styles.tabLink,
            !isOnLandingPage && styles.tabLinkOnOtherScreens
          )}
        >
          Recognition
        </span>
      </NextLink>
    </div>
  );
};

export default NavLinks;
