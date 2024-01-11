import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";

import NavigationBar from "@/components/navigationBar/NavigationBar";
import Footer from "@/components/footer/FooterPage";

import { Course } from "@/types/courses.types";
import styles from "./CourseDetails.module.scss";

interface CourseDetailsProps {
  details: Course | undefined;
}

const CourseDetails: FC<CourseDetailsProps> = ({ details }) => {
  return (
    <>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.coursesDetails}>
        <div className={styles.courseDetailsTitle}>Courses</div>
        <div className={styles.subTitle}>
          {details?.title}
          <span className={styles.duration}>
            {details?.duration} {details?.isYearly ? "year" : "month(s)"} course
          </span>
        </div>
        <div className={styles.text}>{details?.description}</div>
        {details?.courseFor?.map((item) => (
          <>
            <div className={styles.subTitle}>Who is this course for?</div>
            {/* eslint-disable-next-line react/jsx-key */}
            <div className={styles.bulletPoint}>
              <span className={styles.bullet}></span>
              <div className={styles.text}>{item}</div>
            </div>
          </>
        ))}
        {details?.customPoints?.map((item) => (
          <>
            {/* eslint-disable-next-line react/jsx-key */}
            <div className={styles.bulletPoint}>
              <span className={styles.bullet}></span>
              <div className={styles.text}>{item}</div>
            </div>
          </>
        ))}
        {details?.academicSchedule?.map((item) => (
          <>
            <div className={styles.subTitle}>Academic Schedule</div>
            {/* eslint-disable-next-line react/jsx-key */}
            <div className={styles.bulletPoint}>
              <span className={styles.bullet}></span>
              <div className={styles.text}>{item}</div>
            </div>
          </>
        ))}
        {details?.seeYourself?.map((item) => (
          <>
            <div className={styles.subTitle}>
              Where you may see yourself after completing course
            </div>
            {/* eslint-disable-next-line react/jsx-key */}
            <div className={styles.bulletPoint}>
              <span className={styles.bullet}></span>
              <div className={styles.text}>{item}</div>
            </div>
          </>
        ))}
        {details?.previouslyRecruited?.map((item) => (
          <>
            {/* eslint-disable-next-line react/jsx-key */}
            <div className={styles.subTitle}>Previously recruited by </div>
            <Image
              src={`/${item}.svg`}
              alt="company logo"
              width={200}
              height={100}
            />
          </>
        ))}

        <div className={styles.applyCourseLink}>
          <div className={styles.subTitleLink}> Apply for a course at </div>
          <NextLink href="/enquiry" className={styles.link}>
            websiteurl.com/course-enquiry-form
          </NextLink>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default CourseDetails;
