import React, { useState } from "react";
import styles from "./GalleryPage.module.scss";
import { useRouter } from "next/router";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { galleryCampus, galleryEvents } from "../../helpers/galleryPage";

const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Campus");
  const router = useRouter();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.title}>
        <div className={styles.titleHeading}>Gallery</div>
      </div>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${
            activeTab === "Campus" ? styles.activeTab : ""
          }`}
          onClick={() => {
            handleTabClick("Campus");
            router.push(`/gallery`);
          }}
        >
          Campus
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "Events" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("Events")}
        >
          Events
        </div>
      </div>
      <div className={styles.windowWidthLine}></div>
      {activeTab === "Campus" && <ImageCarousel images={galleryCampus} />}
      {activeTab === "Events" && <ImageCarousel images={galleryEvents} />}
    </>
  );
};

export default GalleryPage;
