import React, { useState } from "react";
import styles from "./GalleryPage.module.scss";
import { useRouter } from "next/router";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

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
      {activeTab === "Campus" && (
        <ImageCarousel
          images={[
            { name: "Admin", src: "/gallery1.svg", id: 1 },
            { name: "Office", src: "/gallery2.svg", id: 2 },
            { name: "Office 2", src: "/gallery3.svg", id: 3 },
            { name: "Office 3", src: "/gallery4.svg", id: 4 },
            { name: "Office 4", src: "/gallery5.svg", id: 5 },
          ]}
        />
      )}
      {activeTab === "Events" && (
        <ImageCarousel
          images={[
            { name: "Event 1", src: "/aboutUs1.svg", id: 1 },
            { name: "Event 2", src: "/aboutUs2.svg", id: 2 },
            { name: "Event 3", src: "/aboutUs3.svg", id: 3 },
          ]}
        />
      )}
    </>
  );
};

export default GalleryPage;
