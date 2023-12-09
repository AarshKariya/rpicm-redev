import React from "react";
import styles from "../CoursesSection.module.scss";
import { motion } from "framer-motion";
import { NextPage } from "next";

type CourseItem = {
  id: any;
  courseItemTitle: string;
  courseItemRedirect: string;
};

type CourseTileProps = {
  title?: string;
  courses?: CourseItem[];
};

const CourseTile: NextPage<CourseTileProps> = ({
  title,
  courses = [],
}: any) => {
  const hasCourseItems = courses && courses?.length > 0;
  return (
    <div
      className={styles.courseTile}
      style={{ height: hasCourseItems ? "auto" : "fit-content" }}
    >
      <div className={styles.tileTitle}>{title}</div>
      {hasCourseItems && (
        <ul className={styles.courseList}>
          {courses.map((course: CourseItem, index: number) => (
            <motion.li
              key={index}
              className={styles.courseItem}
              whileHover={{
                scale: 1.05,
                color: "#c1121f",
                textDecoration: "underline",
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {course?.courseItemTitle}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseTile;
