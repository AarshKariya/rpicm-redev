import React, { useEffect, useState } from "react";
import styles from "./GuestLectures.module.scss";
import { guestLecturesData } from "./helpers/guestLecturesConfig";
import GuestDetails from "./components/guestDetails/GuestDetails";
import GuestPictures from "./components/guestPictures/GuestPictures";

const GuestLectures = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (guestLecturesData && guestLecturesData.length > 0) {
      setFocusedIndex(guestLecturesData[0]?.id || 0);
    }
  }, []);

  const handleHover = (index: any) => {
    setFocusedIndex(index);
  };

  return (
    <div className={styles.guestLecturesPage}>
      <div className={styles.pageTitle}>Guest Lectures</div>
      <div className={styles.container}>
        <GuestPictures
          focusedIndex={focusedIndex}
          handleHover={handleHover}
          setFocusedIndex={setFocusedIndex}
        />
        <GuestDetails focusedIndex={focusedIndex} />
      </div>
    </div>
  );
};

export default GuestLectures;
