import React, { FC,ReactElement } from "react";
import Image from "next/image";
import cx from "classnames";

import styles from "../NavigationBar.module.scss";
import RPICMLogo from "@/images/logos/rpicmlogo.svg";

type RpicmLogoProps = {
  isOnLandingPage: boolean;
}

const RpicmLogo:FC<RpicmLogoProps> = ({isOnLandingPage}):ReactElement => {
  return (
    <div className={cx(styles.logo, !isOnLandingPage && styles.addBackground)}>
      <Image src={RPICMLogo} alt="Logo" width={76} height={55} quality={100} />
    </div>
  );
};

export default RpicmLogo;
