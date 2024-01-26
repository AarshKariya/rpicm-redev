import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../LandingPage.module.scss";

const ImageText: React.FC = () => {
  const controls = useAnimation();

  const runColorAnimation = async () => {
    await controls.start({
      color: ["#F9F4F0", "#F9F4F0", "#000"],
    });

    await controls.start({ color: "#000" });
  };

  useEffect(() => {
    runColorAnimation();
  }, [controls]);

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
        <div className={styles.institutePrefixTitle}>
          Bharatiya Vidya Bhavan{"'"}s
        </div>
        <div className={styles.instituteTagLine}>
          {Array.from(
            "Rajendra Prasad Institute of Communication & Management"
          ).map((char, index) => (
            <motion.span
              key={index}
              initial={{ color: "#000" }}
              animate={{ color: "#F9F4F0" }}
              transition={{
                duration: 0.5,
                delay: 0.25 + index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className={styles.instituteName}>Skilling INDIA since 1961</div>
      </motion.div>
    </div>
  );
};

export default ImageText;
