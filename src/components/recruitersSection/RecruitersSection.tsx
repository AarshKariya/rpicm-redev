import { motion, useAnimation } from "framer-motion";
import styles from "./RecruitersSection.module.scss";
import { NextPage } from "next";
import { RecruiterSectionLogos } from "./helpers/recruitersSectionHelpers";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const RecruitersSection: NextPage = () => {
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

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.row}>
        {RecruiterSectionLogos.slice(0, 6).map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className={styles.logo}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
      <div className={styles.row}>
        {RecruiterSectionLogos.slice(6, 12).map((logo, index) => (
          <motion.img
            key={index + 6}
            src={logo}
            alt={`Logo ${index + 7}`}
            className={styles.logo}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
      <div className={styles.row}>
        {RecruiterSectionLogos.slice(12, 18).map((logo, index) => (
          <motion.img
            key={index + 6}
            src={logo}
            alt={`Logo ${index + 13}`}
            className={styles.logo}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
      <div className={styles.row}>
        {RecruiterSectionLogos.slice(18, 24).map((logo, index) => (
          <motion.img
            key={index + 6}
            src={logo}
            alt={`Logo ${index + 19}`}
            className={styles.logo}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.recruitersText}
      >
        and 100+ recruiters
      </motion.div>
    </div>
  );
};

export default RecruitersSection;
