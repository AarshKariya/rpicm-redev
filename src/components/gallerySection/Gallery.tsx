import { motion, useAnimation } from "framer-motion";
import styles from "./Gallery.module.scss";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Gallery: NextPage = () => {
  const router = useRouter();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
      animate={controls}
      ref={ref}
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
          src="/gallery2.svg"
          alt="Image 2"
          className={styles.galleryImage}
          variants={itemVariants}
        />
        <motion.img
          src="/gallery3.svg"
          alt="Image 3"
          className={styles.galleryImage}
          variants={itemVariants}
        />
      </motion.div>
      {/* Second Row */}
      <motion.div className={styles.row} variants={containerVariants}>
        <motion.img
          src="/gallery4.svg"
          alt="Image 4"
          className={styles.galleryImage}
          variants={itemVariants}
        />
        <motion.img
          src="/gallery5.svg"
          alt="Image 5"
          className={styles.galleryImage}
          variants={itemVariants}
        />
        <motion.div
          className={styles.viewGallery}
          variants={itemVariants}
          onClick={() => router.push(`/gallery`)}
          whileHover={{
            scale: 1.05,
            color: "#c1121f",
            textDecoration: "underline",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          View Gallery
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
