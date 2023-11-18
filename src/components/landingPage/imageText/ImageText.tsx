import React, { useEffect, useRef } from "react";
import styles from "../LandingPage.module.scss";
import { motion } from "framer-motion";

const ImageText: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className={styles.textContainer}
      >
        <div className={styles.instituteName}>
          Welcome to Rajendra Prasad Institute of Communication & Management
        </div>
        <div className={styles.instituteTagLine}>SKILLING INDIA SINCE 1961</div>
      </motion.div>
    </div>
  );
};

export default ImageText;
