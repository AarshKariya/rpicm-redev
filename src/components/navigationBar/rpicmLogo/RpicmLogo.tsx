import React from "react";
import Image from "next/image";
import styles from "../NavigationBar.module.scss";
import RPICMLogo from "@/images/logos/rpicmlogo.svg";

const RpicmLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Image src={RPICMLogo} alt="Logo" width={76} height={55} quality={100} />
    </div>
  );
};

export default RpicmLogo;
