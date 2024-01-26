import React from "react";
import styles from "../../AboutUs.module.scss";
import { NextPage } from "next";

const HistoryThirdRow: NextPage = () => {
  return (
    <div className={styles.professionals}>
      <div className={styles.professionalsContent}>
        <div className={styles.professionalsText}>
          <p>
            The students possessing the first degree of any recognized
            University or Institution recognized by the University Grants
            Commission are eligible for admission to the various programmes
            organised by RPI.
          </p>
          <p>
            Some of the Postgraduate Programmes have been recognized by the
            Central Government, many State Governments and a few Universities.
            Students passing the Post-Graduate Programmes in Mass Communication
            from Bharatiya Vidya Bhavan’s Rajendra Prasad Institute of
            Communication & Management are treated as equivalent to
            Post-Graduate Diploma in Mass Communication of Guru Jambheshwar
            University, Hissar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryThirdRow;
