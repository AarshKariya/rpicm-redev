// pages/blogs.js

import React from "react";
import BlogTile from "./BlogTile";
import styles from "./BlogTile.module.scss";

const Blogs = () => {
  return (
    <div className={styles.blogsPage}>
      <h1 className={styles.pageTitle}>Blogs</h1>
      <div className={styles.tilesContainer}>
        <BlogTile />
        <BlogTile />
        <BlogTile />
        {/* Add more BlogTiles */}
      </div>
    </div>
  );
};

export default Blogs;
