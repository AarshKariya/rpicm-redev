import React from "react";
import CourseTile from "./components/CourseTile";
import styles from "./CoursesSection.module.scss";
import { NextPage } from "next";

const Courses: NextPage = () => {
  return (
    <div className={styles.coursesPage}>
      <h1 className={styles.sectionTitle}>Courses</h1>
      <div className={styles.tilesContainer}>
        <div className={styles.horizontalTiles}>
          <CourseTile
            title="Communication"
            courses={[
              "Journalism",
              "Digital Media",
              "Public Relations",
              "Strategic Communication for Sustainable Impact",
              "School Journalism",
              "Campus Journalism",
            ]}
          />
          <CourseTile
            title="Management"
            courses={[
              "Industrial Relations and Personal Management",
              "Materials Management",
              "International Trade",
              "Hospital Management",
              "Marketing and Sales Management",
              "Business Management",
              "Financial Management",
            ]}
          />
        </div>
        <div className={styles.verticalTiles}>
          <CourseTile title="Cultural Heritage of India" />
          <CourseTile title="1 Year Courses" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
