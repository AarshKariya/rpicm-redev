import { NextPage } from "next";
import React from "react";
import styles from "../FooterPage.module.scss";
import Image from "next/image";

const FooterInstituteLogo: NextPage = () => {
  return (
    <div className={styles.logo}>
      <Image src="/rpicmlogo.svg" alt="Logo" width={96} height={70} />
    </div>
  );
};

export default FooterInstituteLogo;
