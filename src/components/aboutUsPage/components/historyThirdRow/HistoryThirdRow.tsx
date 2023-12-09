import React from "react";
import styles from "../../AboutUs.module.scss";
import { NextPage } from "next";

const HistoryThirdRow: NextPage = () => {
  return (
    <div className={styles.professionals}>
      <div className={styles.professionalsContent}>
        <div className={styles.professionalsText}>
          <p>
            Over the decades, Bhavans RPICM has empowered countless
            professionals, including journalists, editors, public relations
            specialists, corporate communication experts, HR managers, foreign
            trade professionals, government officials, and more. Its legacy of
            success spans several generations, with lakhs of students benefiting
            from its programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryThirdRow;
