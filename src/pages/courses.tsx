import { coursesData } from "@/components/coursesSection/helpers/courseConfig";
import CoursesPage from "@/screens/coursesPage/CoursesPage";

const Courses = () => {
  return (
    <div style={{ overflowX: "hidden", margin: "-8px" }}>
      <CoursesPage coursesData={coursesData} />
    </div>
  );
};

export default Courses;
