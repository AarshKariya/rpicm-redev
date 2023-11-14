"use client";
import { useRef } from "react";
import styles from "./page.module.scss";
import HamburgerMenu from "@/components/hamburgerMenu/HamburgerMenu";
import StickyCursor from "@/components/stickyCursor/StickyCursor";
import Header from "@/components/header/Header";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <main className={styles.main}>
      <HamburgerMenu ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <Header />
    </main>
  );
}
