import { motion } from "framer-motion";
import styles from "./IntroPage.module.scss";

const IntroPage = () => {
  return (
    <div className={styles.redBackground}>
      <div className={styles.introText}>
        Established in 1961 as Bhavan’s College of Journalism, Advertising, and
        Printing, this flagship institute of Bharatiya Vidya Bhavan has evolved
        into a sprawling network offering journalism, communication, media
        education, and management courses across India.
      </div>
      <div className={styles.question}>
        <div className={styles.introQuestion}>Why RPICM</div>
        <motion.div
          className={styles.line}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        <div className={styles.listContainer}>
          <ul>
            <li>Professional Diploma and Certificate Courses</li>
            <li>Convenient Timing for Professionals and Students</li>
            <li>Convenient Locations across India</li>
            <li>Professionals, Experts and Academics as teachers</li>
            <li>Immediate Employability</li>
            <li>Multiple University and Government Recognitions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
