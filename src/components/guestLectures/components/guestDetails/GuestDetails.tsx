import React from "react";
import styles from "../../GuestLectures.module.scss";
import { NextPage } from "next";
import { guestLecturesData } from "../../helpers/guestLecturesConfig";

interface GuestDetailsProps {
  focusedIndex: number | null;
}

const GuestDetails: NextPage<GuestDetailsProps> = ({ focusedIndex }) => {
  return (
    <div className={styles.details}>
      {focusedIndex !== null && (
        <>
          <div className={styles.detailsDescription}>
            {guestLecturesData[focusedIndex].description}
          </div>
          <div className={styles.detailsTitle}>
            {guestLecturesData[focusedIndex].name}
          </div>
          <div className={styles.positionStyle}>
            {guestLecturesData[focusedIndex].position}
          </div>
        </>
      )}
    </div>
  );
};

export default GuestDetails;
