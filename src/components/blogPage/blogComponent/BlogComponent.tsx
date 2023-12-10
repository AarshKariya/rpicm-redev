import { motion } from "framer-motion";
import styles from "./BlogComponent.module.scss";
import Image from "next/image";
import { NextPage } from "next";

const BlogComponent: NextPage = () => {
  const blogData = {
    heading: "Blog",
    blogType: "Management",
    title: "What is Business Management? How Strategy in Business helps?",
    updatedAt: "Updated 25 Nov, 2023",
    category: "MANAGEMENT/RISKS",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed et quam justo. Sed ultrices mi eget metus eleifend, 
              id ullamcorper orci scelerisque. Proin id odio nec justo 
              ultrices lacinia. Vestibulum sed ante non turpis cursus 
              placerat. Sed fringilla, ex ut aliquam tincidunt, mi ex 
              consectetur orci, vitae lacinia ligula urna id quam. 
              Suspendisse eget leo neque. Morbi rutrum varius libero 
              vel venenatis.`,
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogHeader}>
        <div className={styles.blogHeading}>{blogData?.heading}</div>
        <div className={styles.blogArrow}>{">"}</div>
        <div className={styles.blogType}>{blogData?.blogType}</div>
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogImage}>
          <Image
            src="/blogBgImage.svg"
            alt="Blog Image"
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.imageOverlay}>
            <div className={styles.blogTypeHeading}>{blogData?.category}</div>
            <div className={styles.blogHeading}>{blogData?.title}</div>
            <div className={styles.blogUpdatedAt}>{blogData?.updatedAt}</div>
          </div>
        </div>
        <motion.div
          className={styles.blogText}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.blogParagraphs}>{blogData?.content}</div>
          <div className={styles.blogParagraphs}>{blogData?.content}</div>
          <div className={styles.blogParagraphs}>{blogData?.content}</div>
        </motion.div>
      </div>
      <div className={styles.exploreCourses}>
        <div className={styles.exploreTitle}>Explore Courses</div>
        <div className={styles.courseOptions}>
          <motion.div
            className={styles.courseOption}
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
            Business Management
          </motion.div>
          <motion.div
            className={styles.courseOption}
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
            Marketing Management
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
