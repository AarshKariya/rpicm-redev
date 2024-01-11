import React from "react";
import styles from "../../AboutUs.module.scss";
import { NextPage } from "next";

const HistoryThirdRow: NextPage = () => {
  return (
    <div className={styles.professionals}>
      <div className={styles.professionalsContent}>
        <div className={styles.professionalsText}>
          <p>
            Bharatiya Vidya Bhavan’s diploma and certificate courses have
            emerged as a benchmark for many other colleges, institutes, and
            universities to replicate their success. Some of the courses enjoy
            the privilege of being recognised as diploma courses by several
            universities. Many of the courses have been officially notified by
            the central and state governments as qualifications for recruitment
            for several positions in government departments.
          </p>
          <p>
            Several generations of successful journalists, editors, public
            relations professionals, corporate communication experts, HR
            managers, foreign trade experts, government officials, and
            professionals from many other fields owe their success to the skills
            learned at Bhavan’s Rajendra Prasad Institute of Communication and
            Management. The number of students who benefited from these courses
            in over six decades runs into several lakhs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryThirdRow;
