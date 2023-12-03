import { motion } from "framer-motion";
import styles from "./BlogComponent.module.scss";
import Image from "next/image";

const BlogComponent = () => {
  // Sample data for the blog post
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
      <div className={styles.blogImage}>
        <Image
          src="/blogBgImage.svg"
          alt="Blog Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <motion.div
        className={styles.blogTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h4>{blogData.category}</h4>
        <h1>{blogData.title}</h1>
        <p>{blogData.updatedAt}</p>
      </motion.div>
      <motion.div
        className={styles.blogContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>{blogData.heading}</h2>
        <p>{blogData.content}</p>
        <p>{blogData.content}</p>
        <p>{blogData.content}</p>
      </motion.div>
    </div>
  );
};

export default BlogComponent;
