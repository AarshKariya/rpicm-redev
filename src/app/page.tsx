"use client";
import LandingPage from "@/components/landingPage/LandingPage";
import styles from "./page.module.scss";
import RecruitersPage from "@/components/recruitersPage/RecruitersPage";
import RpicmIntroSection from "@/components/introPage/RpicmIntroSection";
import Gallery from "@/components/gallerySection/Gallery";
import Blogs from "@/components/blogPage/Blogs";
import Courses from "@/components/coursesSection/CoursesSection";
import GuestLectures from "@/components/guestLectures/GuestLectures";
import Footer from "@/components/footer/FooterPage";

export default function Home() {
  return (
    <main className={styles.main} style={{ overflowX: "hidden" }}>
      <LandingPage />
      <RecruitersPage />
      <RpicmIntroSection />
      <Gallery />
      <Courses />
      <GuestLectures />
      {/* <Blogs /> */}
      <Footer />
    </main>
  );
}
