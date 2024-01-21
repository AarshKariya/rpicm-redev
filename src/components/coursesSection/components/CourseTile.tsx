import React from "react";
import styles from "../CoursesSection.module.scss";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { Course } from "@/types/courses.types";
import { useRouter } from "next/navigation";
import { FirstTwoCourseTiles } from "../helpers/courseConfig";

type CourseItem = {
  id: any;
  title: string;
  description: string;
  showArrow: boolean;
  duration: number;
  isYearly: boolean;
  courseFor?: string[];
  academicSchedule?: string[];
  seeYourself?: string[];
  customPoints?: string[];
};

type CourseTileProps = {
  title?: string;
  courses?: CourseItem[];
  index?: number;
};

const CourseTile: NextPage<CourseTileProps> = ({
  title,
  courses = [],
  index,
}: any) => {
  const router = useRouter();
  const hasCourseItems = courses && courses?.length > 0;

  const handleClick = (course: Course) => {
    // Store the course data in local storage
    localStorage.setItem("selectedCourse", JSON.stringify(course));

    // Navigate to the next page using the router
    router.push(`/courses/${encodeURIComponent(course?.title)}`);
  };

  return (
    <div
      className={styles.courseTile}
      style={{
        height: FirstTwoCourseTiles.includes(title) ? "auto" : "fit-content",
      }}
    >
      {title && (
        <div
          className={
            hasCourseItems
              ? styles.tileTitle
              : styles.tileTitleWithoutCourseItems
          }
        >
          {title}
        </div>
      )}
      {hasCourseItems && (
        <ul className={styles.courseList}>
          {courses?.map((course: CourseItem, index: number) => (
            <motion.li
              key={index}
              className={styles.courseItem}
              onClick={() => handleClick(course)}
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
              {course?.title}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseTile;
