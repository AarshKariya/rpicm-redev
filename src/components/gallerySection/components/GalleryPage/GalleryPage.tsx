import React, { useState } from "react";
import CampusTab from "../CampusTab/CampusTab";
import EventTab from "../EventTab/EventTab";
import styles from "./GalleryPage.module.scss";
import { useRouter } from "next/router";

const campusTiles = [
  { name: "Admin", image: "admin.jpg", id: 1 },
  { name: "Office", image: "office.jpg", id: 2 },
];

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
        <CampusTab
          campusTiles={[
            { name: "Admin", image: "gallery1.svg", id: 1 },
            { name: "Office", image: "gallery2.svg", id: 2 },
            { name: "Office", image: "gallery2.svg", id: 3 },
            { name: "Office", image: "gallery2.svg", id: 4 },
            { name: "Office", image: "gallery2.svg", id: 5 },
          ]}
        />
      )}
      {activeTab === "Events" && (
        <EventTab
          events={[
            { name: "Event 1", image: "aboutUs1.svg", id: 1 },
            { name: "Event 2", image: "aboutUs2.svg", id: 2 },
            { name: "Event 3", image: "aboutUs3.svg", id: 3 },
          ]}
        />
      )}
    </>
  );
};

export default GalleryPage;
