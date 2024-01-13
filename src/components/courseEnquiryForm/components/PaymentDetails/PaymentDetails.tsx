import React from "react";
import { motion } from "framer-motion";
import styles from "../../CourseEnquiryForm.module.scss";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

type PaymentDetailsProps = {
  date: string;
  place: string;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlaceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckBoxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFormValid: boolean;
  formik: any;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  date,
  place,
  handleDateChange,
  handlePlaceChange,
  handleCheckBoxChange,
  isFormValid,
  formik,
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
        <motion.div className={styles.row} variants={itemVariants}>
          <div className={styles.paymentDetailsInfo}>Date:</div>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            id="enquiryDate"
            name="enquiryDate"
          />
        </motion.div>
        <motion.div className={styles.row} variants={itemVariants}>
          <div className={styles.paymentDetailsInfo}>Place:</div>
          <input
            type="text"
            value={place}
            onChange={handlePlaceChange}
            placeholder="Enter place"
            id="enquiryPlace"
            name="enquiryPlace"
          />
        </motion.div>
        <motion.div className={styles.row} variants={itemVariants}>
          <CheckboxInput
            value=""
            label="*I hereby declare that the information given above are true, and correct to the best of my knowledge"
            onChange={handleCheckBoxChange}
            id="declarationCheck"
          />
        </motion.div>
        <motion.button
          disabled={!isFormValid}
          className={styles.saveButton}
          variants={itemVariants}
          type="submit"
        >
          {formik.isSubmitting ? "Submitting Form" : "Submit Form"}
        </motion.button>

        {formik.isSubmitting && (
          <div className={styles.formSubmittedText}>
            We will get back to you shortly.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PaymentDetails;
