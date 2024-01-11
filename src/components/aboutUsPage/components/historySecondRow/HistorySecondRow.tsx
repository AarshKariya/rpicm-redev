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
            It emerged as the largest network providing journalism,
            communication, and media education in India through its centres
            spread across several states. In many states, the Institute opened a
            Centre, and it became a pioneer in professional courses in this
            field. It was in 1978, that its activities and scope were widened
            with the introduction of management education into its mandate.
            Thus, it was renamed the Rajendra Prasad Institute of Communication
            and Management.
          </p>
          <p>
            Today, it offers multiple courses to learn professional skills in
            communication and management areas. It is also famous for making
            professional skills available to individuals in employment or those
            pursuing other studies. And also among those who want to upgrade
            their skills but can’t do that in regular working hours. It has 24
            centres and affiliates across the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySecondRow;
