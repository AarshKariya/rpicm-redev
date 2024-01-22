import React from "react";
import styles from "../../AboutUs.module.scss";
import Image from "next/image";
import { NextPage } from "next";

const HistoryFirstRow: NextPage = () => {
  return (
    <div className={styles.historyContent}>
      <div className={styles.historyText}>
        {/* <p>
          The Rajendra Prasad Institute of Communication and Management: A
          Pioneer in Professional Education and Upskilling.
        </p> */}
        <p>
          This institute is the flagship of Bharatiya Vidya Bhavan’s
          professional educational initiatives. It started in 1961 as Bhavan’s
          College of Journalism, Advertising and Printing in Mumbai. It was
          renamed as Rajendra Prasad Institute of Communication Studies in 1965,
          in honour of Dr. Rajendra Prasad, the first President of India and
          also one of the founders of BVB.
        </p>
      </div>
      <div className={styles.historyImage}>
        <Image
          src="/aboutUs1.svg"
          alt="History Image"
          width={460}
          height={345}
        />
      </div>
    </div>
  );
};

export default HistoryFirstRow;
