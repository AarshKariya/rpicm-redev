import { motion } from "framer-motion";
import styles from "./Gallery.module.scss";
import { NextPage } from "next";

const Gallery: NextPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={styles.galleryContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* First Row */}
      <motion.div className={styles.row} variants={containerVariants}>
        <motion.img
          src="/gallery1.svg"
          alt="Image 1"
          className={styles.galleryImage}
          variants={itemVariants}
        />
        <motion.img
          src="/gallery1.svg"
          alt="Image 2"
          className={styles.galleryImage}
          variants={itemVariants}
        />
        <motion.img
          src="/gallery1.svg"
          alt="Image 3"
          className={styles.galleryImage}
          variants={itemVariants}
        />
      </motion.div>
      {/* Second Row */}
      <motion.div className={styles.row} variants={containerVariants}>
        <motion.img
          src="/gallery1.svg"
          alt="Image 4"
          className={styles.galleryImage}
          variants={itemVariants}
        />
        <motion.img
          src="/gallery1.svg"
          alt="Image 5"
          className={styles.galleryImage}
          variants={itemVariants}
        />
        <motion.div className={styles.viewGallery} variants={itemVariants}>
          View Gallery
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
