import React from "react";
import styles from "../../AboutUs.module.scss";
import { motion } from "framer-motion";
import { NextPage } from "next";

const AboutUsTiles: NextPage = () => {
  return (
    <div className={styles.tiles}>
      <motion.div
        whileHover={{ backgroundColor: "#253149", color: "#ffffff" }}
        transition={{ duration: 0.3 }}
        className={styles.tile}
      >
        <div className={styles.tileContent}>
          <div className={styles.tilesHeading}>Aims & Objectives</div>
          <div className={styles.tilesDescription}>
            To create effective and good leaders, managers, and professionals,
            mainly in management and communication fields, as well as in other
            disciplines.
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ backgroundColor: "#253149", color: "#ffffff" }}
        transition={{ duration: 0.3 }}
        className={styles.tile}
      >
        <div className={styles.tileContent}>
          <div className={styles.tilesHeading}>Awards & Recognition</div>
          <div className={styles.tilesDescription}>
            Bharatiya Vidya Bhavan is one of Indias foremost and leading
            educational organisations, recognised as an Educational Institution
            of National Eminence by the Government of India.
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ backgroundColor: "#253149", color: "#ffffff" }}
        transition={{ duration: 0.3 }}
        className={styles.tile}
      >
        <div className={styles.tileContent}>
          <div className={styles.tilesHeading}>Awards & Recognition</div>
          <div className={styles.tilesDescription}>
            Recipient of the prestigious Gandhi Peace Prize in 2002 by the
            President of India for its significant contribution towards
            education and promotion of peace and harmony among all faiths and
            communities.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsTiles;
