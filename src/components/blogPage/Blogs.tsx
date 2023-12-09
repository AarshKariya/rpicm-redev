import React from "react";
import BlogTile from "./BlogTile";
import styles from "./BlogTile.module.scss";
import { NextPage } from "next";

const config = [
  {
    id: 1,
    blogTag: "COMMUNICATION",
    blogTitle: "What's happening these days?",
    blogShortDesc: "This is what's been happening.",
    blogRedirect: "someURL",
  },
  {
    id: 2,
    blogTag: "TECHNOLOGY",
    blogTitle: "Latest Technological Advancements",
    blogShortDesc: "Exploring the latest in technology.",
    blogRedirect: "anotherURL",
  },
];

const Blogs: NextPage = () => {
  return (
    <div className={styles.blogsPage}>
      <div className={styles.pageTitle}>Blogs</div>
      <div className={styles.tilesContainer}>
        <BlogTile config={config} />
      </div>
    </div>
  );
};

export default Blogs;
