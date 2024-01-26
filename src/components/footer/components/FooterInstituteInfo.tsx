import React from "react";
import styles from "../FooterPage.module.scss";
import { NextPage } from "next";

const FooterInstituteInfo: NextPage = () => {
  return (
    <div className={styles.instituteAddress}>
      <div>
        4th Floor, Bhavan{"'"}s College Campus, Vidyagauri Nilkanth Marg,
        Khanpur, Ahmedabad – 380001, Gujarat
      </div>
      <div className={styles.instituteEmail}>
        Email:{" "}
        <a href="mailto:rpi@bhavans.info" className={styles.emailLink}>
          rpi@bhavans.info
        </a>
      </div>
      <div className={styles.instituteEmail}>
        WhatsApp and Mobile:{" "}
        <a
          href="https://wa.me/917435012121?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.emailLink}
        >
          7435012121
        </a>
      </div>
    </div>
  );
};

export default FooterInstituteInfo;
