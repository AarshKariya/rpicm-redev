import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cx from "classnames";

import { Course, CourseConfig } from "@/types/courses.types";
import styles from "./CourseCardTile.module.scss"
import { useRouter } from "next/router";

interface CourseCardTileProps {
  courseConfigs: CourseConfig[];
}

const CourseCardTile: FC<CourseCardTileProps> = ({ courseConfigs }) => {
  const router = useRouter(); 
  
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleHover = (index: string | null) => {
    setHoveredIndex(index);
  };
  const handleClick = (course: Course) => {
     // Store the course data in local storage
  localStorage.setItem('selectedCourse', JSON.stringify(course));

  // Navigate to the next page using the router
  router.push(`/course/${encodeURIComponent(course.title)}`, undefined, {
    shallow: true,
  });
  };
  return (
    <div>
      {courseConfigs?.map((config, index) => (
        <div key={index} className={styles.courses} >
          <div className={styles.coursesType}>{config?.courseType}</div>
          <div className={styles.coursesRow}>
            {config?.courseItems.map((course, idx) => (
              <motion.div
                key={course?.id}
                className={cx(styles.courseCard, {
                  [styles.evenRowCard]: index % 2 === 0,
                })}
                onHoverStart={() => handleHover(course?.id)}
                onHoverEnd={() => handleHover(null)}
                whileHover={{ scale: 1.0001, color: 'white' }}

              >
                <div className={styles.tileHeader}>
                  <div className={styles.courseTitle}>{course?.title}</div>
                  {course?.showArrow && <div className={styles.showArrow} onClick={() => handleClick(course)}>&#8599;</div>}
                </div>
                <div>{course?.description}</div>
                <motion.div
                  className={styles.hoverBackground}
                  initial={{ height: 0, top: 0 }}
                  animate={
                    hoveredIndex === course?.id
                      ? { height: "100%", top: 0 }
                      : { height: 0, top: 0 }
                  }
                  exit={{ height: 0, top: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
          <Image
            src="/nextArrow.svg"
            alt="arrow"
            width={35}
            height={35}
            className={styles.nextArrow}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseCardTile;
