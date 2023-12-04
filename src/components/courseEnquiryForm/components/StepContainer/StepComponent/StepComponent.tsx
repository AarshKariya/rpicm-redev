import React from "react";
import styles from "../../../CourseEnquiryForm.module.scss";

type StepProps = {
  currentStep: number;
  stepNumber: number;
  title: string;
  isActive: boolean;
  children?: React.ReactNode;
};

const Step: React.FC<StepProps> = ({
  currentStep,
  stepNumber,
  title,
  isActive,
  children,
}) => {
  return (
    <div className={`${styles.step} ${isActive ? styles.currentStep : ""}`}>
      <span className={styles.stepNumber}>{stepNumber}.</span>
      <h2>{title}</h2>
      {isActive && children}
    </div>
  );
};

export default Step;
