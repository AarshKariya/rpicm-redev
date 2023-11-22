// pages/guestLectures.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./GuestLectures.module.scss";

const guestLecturesData = [
  {
    name: "Guest 1",
    description: "Description about Guest 1 and their lecture.",
    imageUrl: "/gallery1.svg", // Replace with actual image URL
  },
  {
    name: "Guest 2",
    description: "Description about Guest 2 and their lecture.",
    imageUrl: "/gallery2.svg", // Replace with actual image URL
  },
  {
    name: "Guest 3",
    description: "Description about Guest 3 and their lecture.",
    imageUrl: "/gallery3.svg", // Replace with actual image URL
  },
];

const GuestLectures = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleHover = (index: any) => {
    setFocusedIndex(index);
  };

  return (
    <div className={styles.guestLecturesPage}>
      <h1 className={styles.pageTitle}>Guest Lectures</h1>
      <div className={styles.container}>
        <div className={styles.pictureStack}>
          {guestLecturesData.map((guest, index) => (
            <motion.div
              key={index}
              className={styles.pictureContainer}
              style={{
                marginLeft: `-${
                  focusedIndex !== null && index < focusedIndex
                    ? (focusedIndex - index) * 40
                    : 0
                }px`,
                zIndex: guestLecturesData.length - index,
              }}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setFocusedIndex(null)}
            >
              <Image
                src={guest.imageUrl}
                alt={guest.name}
                width={240}
                height={388}
                layout="fixed"
                className={
                  focusedIndex !== null && focusedIndex !== index
                    ? styles.blur
                    : ""
                }
              />
            </motion.div>
          ))}
        </div>
        <div className={styles.details}>
          {focusedIndex !== null && (
            <>
              <h2 className={styles.detailsTitle}>
                {guestLecturesData[focusedIndex].name}
              </h2>
              <p className={styles.detailsDescription}>
                {guestLecturesData[focusedIndex].description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestLectures;
