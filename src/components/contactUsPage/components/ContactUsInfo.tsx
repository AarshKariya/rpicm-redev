import { NextPage } from "next";
import React from "react";
import styles from "./ContactUsInfo.module.scss";

const ContactUsInfo: NextPage = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.section}>
        <div className={styles.heading}>Address:</div>
        <div className={styles.address}>
          4th Floor, Bhavan{"'"}s College Campus, Vidyagauri Nilkanth Marg,
          Khanpur, Ahmedabad – 380001, Gujarat
        </div>
        <div className={styles.email}>
          Email: <a href="mailto:rpi@bhavans.info">rpi@bhavans.info</a>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.heading}>Contact:</div>
        <div>Shri Shyam Parekh, Director.</div>
        <div>Dr. Sayantani Roy, Coordinator.</div>
      </div>

      <div className={styles.section}>
        <div className={styles.heading}>Mobile:</div>
        <div className={styles.mobile}>
          <a
            href="https://wa.me/917435012121?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
          >
            7435012121
          </a>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.heading}>Email:</div>
        <div className={styles.email}>
          <a href="mailto:contact@rpicm.in">contact@rpicm.in</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
