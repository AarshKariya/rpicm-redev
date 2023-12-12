import { FC, useEffect, useState } from "react";
import { Course } from "@/types/courses.types";
import CourseDetails from "@/screens/courseDetails/CourseDetails";

interface CoursePageProps { }

const CoursePage: FC<CoursePageProps> = () => {

  const [details, setDetails] = useState<Course | undefined>();

  useEffect(() => {
    // Retrieve the course data from local storage
    const courseData = localStorage.getItem('selectedCourse');

    if (courseData) {
      const course: Course = JSON.parse(courseData);
      setDetails(course);
    }
  }, []);

  return (
    <div style={{ overflowX: 'hidden', margin: '-8px' }}>
      <CourseDetails details={details} />
    </div>
  );
};

export default CoursePage;
