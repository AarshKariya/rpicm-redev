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
  return (
    <div className={styles.paymentDetails}>
      <div className={styles.column}>
        <div className={styles.paymentDetailsTitle}>PAYMENT DETAILS</div>
        <div className={styles.paymentDetailsSubTitle}>
          Application fee: 2000/-
        </div>
        <div className={styles.row}>
          <div className={styles.paymentDetailsInfo}>Date:</div>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className={styles.row}>
          <div className={styles.paymentDetailsInfo}>Place:</div>
          <input
            type="text"
            value={place}
            onChange={handlePlaceChange}
            placeholder="Enter place"
          />
        </div>
        <div className={styles.row}>
          <CheckboxInput
            value=""
            label="*I hereby declare that the information given above are true, and correct to the best of my knowledge"
            isChecked={isChecked}
            onChange={handleCheckBoxChange}
          />
        </div>
        <button
          onClick={handleButtonClick}
          disabled={!isFormValid}
          className={styles.saveButton}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
