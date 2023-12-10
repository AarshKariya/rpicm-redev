import React from "react";
import BlogTile from "./BlogTile";
import styles from "./BlogTile.module.scss";
import { NextPage } from "next";

const config = [
  {
    id: 1,
    blogTag: "COMMUNICATION",
    blogTitle: "Lorem ipsum dolor sit amet consectetur. ",
    blogShortDesc:
      "Lorem ipsum dolor sit amet consectetur. At pulvinar viverra tortor consectetur. Est sed mattis porttitor in id dui fringilla fringilla sollicitudin.",
    blogRedirect: "someURL",
  },
  {
    id: 2,
    blogTag: "TECHNOLOGY",
    blogTitle: "Lorem ipsum dolor sit amet consectetur. ",
    blogShortDesc:
      "Lorem ipsum dolor sit amet consectetur. At pulvinar viverra tortor consectetur. Est sed mattis porttitor in id dui fringilla fringilla sollicitudin.",
    blogRedirect: "anotherURL",
  },
  {
    id: 3,
    blogTag: "TECHNOLOGY",
    blogTitle: "Lorem ipsum dolor sit amet consectetur. ",
    blogShortDesc:
      "Lorem ipsum dolor sit amet consectetur. At pulvinar viverra tortor consectetur. Est sed mattis porttitor in id dui fringilla fringilla sollicitudin.",
    blogRedirect: "anotherURL",
  },
  {
    id: 4,
    blogTag: "TECHNOLOGY",
    blogTitle: "Lorem ipsum dolor sit amet consectetur. ",
    blogShortDesc:
      "Lorem ipsum dolor sit amet consectetur. At pulvinar viverra tortor consectetur. Est sed mattis porttitor in id dui fringilla fringilla sollicitudin.",
    blogRedirect: "anotherURL",
  },
];

type BlogsProps = {
  blogsSliderHeading?: string | null;
};

const Blogs: NextPage<BlogsProps> = ({ blogsSliderHeading }) => {
  return (
    <div className={styles.blogsPage}>
      <div className={styles.pageTitle}>{blogsSliderHeading ?? "Blogs"}</div>
      <div className={styles.tilesContainer}>
        <div className={styles.tilesWrapper}>
          <BlogTile config={config} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
