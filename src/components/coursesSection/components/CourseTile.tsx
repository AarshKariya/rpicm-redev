import React from "react";
import styles from "../CoursesSection.module.scss";
import { NextPage } from "next";

const CourseTile = ({ title, courses = [] }: any) => {
  return (
    <div className={styles.courseTile}>
      <h2 className={styles.tileTitle}>{title}</h2>
      {courses.length > 0 && (
        <ul className={styles.courseList}>
          {courses.map((course: any, index: number) => (
            <li key={index} className={styles.courseItem}>
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseTile;
