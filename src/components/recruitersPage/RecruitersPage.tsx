import { motion } from "framer-motion";
import styles from "./RecruitersPage.module.scss";
import { NextPage } from "next";

const logos = [
  "/zydusHospital.svg",
  "/timesOfIndia.svg",
  "/celloWorld.svg",
  "/tataAig.svg",
  "/hitachi.svg",
  "/asianPaints.svg",
  "/muthootFinance.svg",
  "/ambujaCement.svg",
  "/jblImage.svg",
  "/vodafone.svg",
  "/axisBank.svg",
  "/lgElectronics.svg",
];

const RecruitersPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {logos.slice(0, 6).map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className={`${styles.logo} ${index < 5 ? styles.withMargin : ""}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
      <div className={styles.row}>
        {logos.slice(6, 12).map((logo, index) => (
          <motion.img
            key={index + 6}
            src={logo}
            alt={`Logo ${index + 7}`}
            className={`${styles.logo} ${index < 5 ? styles.withMargin : ""}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.recruitersText}
      >
        and 100+ recruiters
      </motion.div>
    </div>
  );
};

export default RecruitersPage;
