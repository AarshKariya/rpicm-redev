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
    <>
      {config.map((blog) => (
        <motion.div
          key={blog?.id}
          whileHover={{
            backgroundColor: "#253149",
            color: "#FFFFFF",
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
    </>
  );
};

export default BlogTile;
