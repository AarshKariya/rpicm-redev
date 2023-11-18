"use client";
import LandingPage from "@/components/landingPage/LandingPage";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <LandingPage />
    </main>
  );
}
