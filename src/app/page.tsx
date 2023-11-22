"use client";
import LandingPage from "@/components/landingPage/LandingPage";
import styles from "./page.module.scss";
import RecruitersPage from "@/components/recruitersPage/RecruitersPage";
import IntroPage from "@/components/introPage/IntroPage";
import Gallery from "@/components/galleryPage/Gallery";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <LandingPage />
      <RecruitersPage />
      <IntroPage />
      <Gallery />
    </main>
  );
}
