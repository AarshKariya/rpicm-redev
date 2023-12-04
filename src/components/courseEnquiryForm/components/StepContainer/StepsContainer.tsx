import React from "react";
import { motion } from "framer-motion";
import styles from "../../CourseEnquiryForm.module.scss";
import Step from "./StepComponent/StepComponent";

type StepsContainerProps = {
  currentStep?: number;
};

const StepsContainer: React.FC<StepsContainerProps> = ({ currentStep = 1 }) => {
  return (
    <div className={styles.stepsContainer}>
      <Step
        currentStep={currentStep}
        stepNumber={1}
        title="Fill In the Application Form"
        isActive={currentStep === 1}
      >
        <motion.div
          className={styles.stepIndicator}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Step>
      <div className={styles.divider}></div>
      <Step
        currentStep={currentStep}
        stepNumber={2}
        title="Payment"
        isActive={currentStep === 2}
      >
        <motion.div
          className={styles.stepIndicator}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Step>
    </div>
  );
};

export default StepsContainer;
