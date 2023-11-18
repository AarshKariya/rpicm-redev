"use client";
import LandingPage from "@/components/landingPage/LandingPage";
import styles from "./page.module.scss";
import RecruitersPage from "@/components/recruitersPage/RecruitersPage";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <LandingPage />
      <RecruitersPage />
    </main>
  );
}
