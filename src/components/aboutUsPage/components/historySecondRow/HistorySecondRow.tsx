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
            BVB established Rajendra Prasad Institute Of Communication And
            Management (RPI) in 1961 at Mumbai as a part of Bhavan’s pioneering
            effort to promote non-formal education in modern professional
            subjects. Today RPI oversees examinations and other academic
            administrative matters in 29 of its constituent and affiliated
            colleges.
          </p>
          <p>
            The main objectives of RPI are: • To equip the candidates with the
            latest available knowledge, pertaining to their chosen discipline; •
            To impart adequate professional knowledge and skills, so as to
            enable them to take up careers in their respective fields of
            specialisation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySecondRow;
