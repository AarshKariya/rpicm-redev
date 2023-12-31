import React from "react";
import { motion } from "framer-motion";
import styles from "../../CourseEnquiryForm.module.scss";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import FormInput from "../FormInput/FormInput";

type PaymentDetailsProps = {
  date: string;
  place: string;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlaceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  handleCheckBoxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  isFormValid: boolean;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  date,
  place,
  handleDateChange,
  handlePlaceChange,
  isChecked,
  handleCheckBoxChange,
  handleButtonClick,
  isFormValid,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={styles.paymentDetails}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.column}>
        <motion.div
          className={styles.paymentDetailsTitle}
          variants={itemVariants}
        >
          PAYMENT DETAILS
        </motion.div>
        <motion.div
          className={styles.paymentDetailsSubTitle}
          variants={itemVariants}
        >
          Application fee: ₹2000/-
        </motion.div>
        <motion.div className={styles.row} variants={itemVariants}>
          <div className={styles.paymentDetailsInfo}>Date:</div>
          <input type="date" value={date} onChange={handleDateChange} />
        </motion.div>
        <motion.div className={styles.row} variants={itemVariants}>
          <div className={styles.paymentDetailsInfo}>Place:</div>
          <input
            type="text"
            value={place}
            onChange={handlePlaceChange}
            placeholder="Enter place"
          />
        </motion.div>
        <motion.div className={styles.row} variants={itemVariants}>
          <CheckboxInput
            value=""
            label="*I hereby declare that the information given above are true, and correct to the best of my knowledge"
            isChecked={isChecked}
            onChange={handleCheckBoxChange}
          />
        </motion.div>
        <motion.button
          onClick={handleButtonClick}
          disabled={!isFormValid}
          className={styles.saveButton}
          variants={itemVariants}
        >
          Save and Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PaymentDetails;
