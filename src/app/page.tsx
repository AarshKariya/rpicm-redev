"use client";
import LandingPage from "@/components/landingPage/LandingPage";
import styles from "./page.module.scss";
import RecruitersPage from "@/components/recruitersPage/RecruitersPage";
import IntroPage from "@/components/introPage/IntroPage";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <LandingPage />
      <RecruitersPage />
      <IntroPage />
    </main>
  );
}
