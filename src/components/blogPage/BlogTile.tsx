import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogTile.module.scss";
import { NextPage } from "next";

const BlogTile: NextPage = () => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: "#4CAF50", // Green color, change as needed
        color: "#FFFFFF", // White text color, change as needed
      }}
      className={styles.blogTile}
    >
      <div className={styles.tag}>Tag</div>
      <h2 className={styles.title}>Blog Title</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien
        arcu.
      </p>
      <button className={styles.readMoreButton}>Read More</button>
      <div className={styles.arrowButton}>➜</div>
    </motion.div>
  );
};

export default BlogTile;
