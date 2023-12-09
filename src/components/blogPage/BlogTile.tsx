import React from "react";
import { motion } from "framer-motion";
import styles from "./BlogTile.module.scss";
import { NextPage } from "next";

interface BlogConfig {
  blogTag: string;
  blogTitle: string;
  blogShortDesc: string;
  blogRedirect: string;
  id: number;
}

interface BlogTileProps {
  config: BlogConfig[];
}

const BlogTile: NextPage<BlogTileProps> = ({ config }) => {
  const handleReadMoreClick = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3, // Delay the animation initially
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
      className={styles.blogTileContainer}
    >
      {config?.map((blog) => (
        <motion.div
          key={blog?.id}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                x: { type: "spring", stiffness: 120, duration: 0.5 },
                opacity: { duration: 0.3 },
              },
            },
            hidden: { opacity: 0, x: -50 },
          }}
          whileHover={{
            backgroundColor: "#253149",
            color: "#fff",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className={styles.blogTile}
        >
          <div className={styles.tag}>{blog.blogTag}</div>
          <div className={styles.title}>{blog.blogTitle}</div>
          <div className={styles.description}>{blog.blogShortDesc}</div>
          <div className={styles.readMoreSection}>
            <div
              className={styles.readMoreText}
              onClick={() => handleReadMoreClick(blog.blogRedirect)}
            >
              Read More
            </div>
            <div className={styles.arrowButton}>➜</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogTile;
