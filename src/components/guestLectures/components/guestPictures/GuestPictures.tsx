import React from "react";
import styles from "../../GuestLectures.module.scss";
import { motion } from "framer-motion";
import { guestLecturesData } from "../../helpers/guestLecturesConfig";
import { NextPage } from "next";

interface GuestPictures {
  focusedIndex: number | null;
  setFocusedIndex: any;
  handleHover: (id: number) => void;
}

const GuestPictures: NextPage<GuestPictures> = ({
  focusedIndex,
  setFocusedIndex,
  handleHover,
}) => {
  return (
    <div className={styles.pictureStack}>
      {guestLecturesData?.map((guest) => (
          <motion.div
          key={guest?.id}
          className={styles.pictureContainer}
          style={{
            zIndex: focusedIndex === guest?.id ? 10:0
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: '#f8f8f8', // Change the background color on hover
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow effect on hover
          }}
          initial={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} // Initial styles
          onMouseEnter={() => handleHover(guest?.id)}
          onMouseLeave={() => setFocusedIndex(0)}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Add transition for smooth animation
        >
          <img
            src={guest.imageUrl}
            alt={guest.name}
            style={{width:'170px',height:'388px',objectFit:'cover'}}
            className={
              focusedIndex !== null && focusedIndex !== guest?.id
                ? styles.blur
                : ""
            }
          />
         </motion.div>
      ))}
    </div>
  );
};

export default GuestPictures;
