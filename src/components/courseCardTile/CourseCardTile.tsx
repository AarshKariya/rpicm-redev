import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./CourseCardTile.module.scss"; // Import SCSS module

interface Course {
  title: string;
  description: string;
}

interface CourseConfig {
  courseType: string;
  courseItems: Course[];
}

interface CourseCardTileProps {
  courseConfigs: CourseConfig[];
}

const CourseCardTile: FC<CourseCardTileProps> = ({ courseConfigs }) => {
  return (
    <div>
      {courseConfigs.map((config, index) => (
        <div key={index}>
          <div className={styles["course-type"]}>{config.courseType}</div>
          <div className={styles["tile-container"]}>
            {config.courseItems.map((course, idx) => (
              <motion.div
                key={idx}
                className={styles["course-card"]}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles["title"]}>
                  <div className={styles["title-text"]}>{course.title}</div>
                  <div className={styles["arrow"]}>&#8599;</div>
                </div>
                <div className={styles["description"]}>
                  {course.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCardTile;
