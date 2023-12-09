import React from "react";
import styles from "../../GuestLectures.module.scss";
import { motion } from "framer-motion";
import { guestLecturesData } from "../../helpers/guestLecturesConfig";
import { NextPage } from "next";
import Image from "next/image";

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
            marginLeft: `-${
              focusedIndex !== null && guest?.id < focusedIndex
                ? (focusedIndex - guest?.id) * 40
                : 0
            }px`,
            zIndex: guestLecturesData?.length - guest?.id,
          }}
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => handleHover(guest?.id)}
          onMouseLeave={() => setFocusedIndex(0)}
        >
          <Image
            src={guest.imageUrl}
            alt={guest.name}
            quality={100}
            width={240}
            height={388}
            layout="fixed"
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
