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
          <div className={styles.tilesHeading}>Mission</div>
          <div className={styles.tilesDescription}>
            Lorem ipsum dolor sit amet consectetur. Purus sed pharetra sit ante
            mattis. Nibh massa feugiat elit vulputate scelerisque ultrices
            accumsan velit.
          </div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ backgroundColor: "#253149", color: "#ffffff" }}
        transition={{ duration: 0.3 }}
        className={styles.tile}
      >
        <div className={styles.tileContent}>
          <div className={styles.tilesHeading}>Vision</div>
          <div className={styles.tilesDescription}>
            Lorem ipsum dolor sit amet consectetur. Purus sed pharetra sit ante
            mattis. Nibh massa feugiat elit vulputate scelerisque ultrices
            accumsan velit.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsTiles;
