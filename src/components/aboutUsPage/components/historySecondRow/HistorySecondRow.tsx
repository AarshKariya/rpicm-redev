import React from "react";
import styles from "../../AboutUs.module.scss";
import Image from "next/image";
import { NextPage } from "next";

const HistorySecondRow: NextPage = () => {
  return (
    <div className={styles.today}>
      <div className={styles.todayContent}>
        <div className={styles.todayImages}>
          <div className={styles.todayImage1}>
            <Image
              src="/aboutUs2.svg" // Replace with your image path
              alt="Image 1"
              width={275}
              height={186}
              quality={100}
            />
          </div>
          <div className={styles.todayImage2}>
            <Image
              src="/aboutUs3.svg" // Replace with your image path
              alt="Image 2"
              width={295}
              height={170}
              quality={100}
            />
          </div>
        </div>
        <div className={styles.todayText}>
          <p>
            Today, the institute provides a range of professional courses
            catering to those seeking to enhance their communication and
            management skills. It particularly stands out for its flexibility,
            accommodating individuals in employment or pursuing other studies
            who wish to upskill outside regular working hours. Its certificate
            courses have set the benchmark for many colleges and universities,
            with some recognized as diploma courses by various institutions.
            Many government departments recognize these courses as
            qualifications for specific positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySecondRow;
