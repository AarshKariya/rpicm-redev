import { FC } from "react";

import CourseCardTile from "@/components/courseCardTile/CourseCardTile";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import Footer from "@/components/footer/FooterPage";

import { CourseConfig } from "@/types/courses.types";
import styles from "./CoursesPage.module.scss";


interface CoursesPageProps {
  coursesData: CourseConfig[];
}

const CoursesPage: FC<CoursesPageProps> = ({ coursesData }) => {
  return (
    <>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.coursesPage}>
        <div className={styles.coursesPageTitle}>Courses</div>
        <CourseCardTile courseConfigs={coursesData} />
      </div>
      <Footer/>
    </>
  );
};
export default CoursesPage;
