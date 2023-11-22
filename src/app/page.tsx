"use client";
import LandingPage from "@/components/landingPage/LandingPage";
import styles from "./page.module.scss";
import RecruitersPage from "@/components/recruitersPage/RecruitersPage";
import IntroPage from "@/components/introPage/IntroPage";
import Gallery from "@/components/galleryPage/Gallery";
import Blogs from "@/components/blogPage/Blogs";
import Courses from "@/components/coursesPage/CoursesPage";
import GuestLectures from "@/components/guestLectures/GuestLectures";
import Footer from "@/components/footer/FooterPage";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <LandingPage />
      <RecruitersPage />
      <IntroPage />
      <Gallery />
      <Blogs />
      <Courses />
      <GuestLectures />
      <Footer />
    </main>
  );
}
