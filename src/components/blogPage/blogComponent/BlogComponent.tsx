import { motion } from "framer-motion";
import styles from "./BlogComponent.module.scss";
import Image from "next/image";
import { NextPage } from "next";

const BlogComponent: NextPage = () => {
  const blogData = {
    heading: "Blog > Management",
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
        <h2>{blogData.heading}</h2>
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
            <h4>{blogData.category}</h4>
            <h1>{blogData.title}</h1>
            <p>{blogData.updatedAt}</p>
          </div>
        </div>
        <motion.div
          className={styles.blogText}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>{blogData.content}</p>
          <p>{blogData.content}</p>
          <p>{blogData.content}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogComponent;
