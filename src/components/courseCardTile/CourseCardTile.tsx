import { FC, useState } from "react";
import { motion } from "framer-motion";

interface Course {
  title: string;
  description: string;
  showArrow?: boolean | null;
  id: string;
}

interface CourseConfig {
  courseType: string;
  courseItems: Course[];
}

interface CourseCardTileProps {
  courseConfigs: CourseConfig[];
}

const CourseCardTile: FC<CourseCardTileProps> = ({ courseConfigs }) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleHover = (index: string | null) => {
    setHoveredIndex(index);
  };

  return (
    <div>
      {courseConfigs?.map((config, index) => (
        <div key={index}>
          <div>{config?.courseType}</div>
          <div style={{ display: "flex", overflowX: "auto" }}>
            {config?.courseItems.map((course, idx) => (
              <motion.div
                key={course?.id}
                className={`course-card ${index % 2 === 0 ? "even" : ""}`}
                onHoverStart={() => handleHover(course?.id)}
                onHoverEnd={() => handleHover(null)}
                style={{
                  width: "360px",
                  height: "360px",
                  marginRight: "20px",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div>
                  <div>{course?.title}</div>
                  {course?.showArrow && <div>&#8599;</div>}
                </div>
                <div>{course?.description}</div>
                <motion.div
                  className="hover-background"
                  initial={{ height: 0, top: 0 }}
                  animate={
                    hoveredIndex === course?.id
                      ? { height: "100%", top: 0 }
                      : { height: 0, top: 0 }
                  }
                  exit={{ height: 0, top: 0 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#253149",
                    borderRadius: "8px",
                    zIndex: -1,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCardTile;
