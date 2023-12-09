import React from "react";
import CourseTile from "./components/CourseTile";
import styles from "./CoursesSection.module.scss";
import { NextPage } from "next";
import { courseConfig } from "./helpers/courseConfig";

const Courses: NextPage = () => {
  return (
    <div className={styles.coursesPage}>
      <div className={styles.sectionTitle}>Courses</div>
      <div className={styles.tilesContainer}>
        {courseConfig?.map((course) => (
          <CourseTile
            key={course?.id}
            title={course?.courseTitle}
            courses={course?.courseItems?.map((item) => item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
