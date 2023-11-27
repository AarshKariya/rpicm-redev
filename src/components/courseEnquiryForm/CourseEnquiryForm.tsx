import { motion } from "framer-motion";
import styles from "./CourseEnquiryForm.module.scss";

const CourseEnquiryForm = ({ currentStep = 1 }) => {
  return (
    <div className={styles.courseEnquiryForm}>
      <div className={styles.step}>
        <h2>Fill In the Application Form</h2>
        {/* Your form content for step 1 goes here */}
        {currentStep === 1 && (
          <motion.div
            className={styles.stepIndicator}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.step}>
        <h2>Payment</h2>
        {/* Your payment section content goes here */}
        {currentStep === 2 && (
          <motion.div
            className={styles.stepIndicator}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    </div>
  );
};

export default CourseEnquiryForm;
