import React from "react";
import styles from "../../AboutUs.module.scss";
import Image from "next/image";
import { NextPage } from "next";

const HistoryFirstRow: NextPage = () => {
  return (
    <div className={styles.historyContent}>
      <div className={styles.historyText}>
        <p>
          The Rajendra Prasad Institute of Communication and Management: A
          Pioneer in Professional Education and Upskilling.
        </p>
        <p>
          Established in 1961 as Bhavan’s College of Journalism, Advertising,
          and Printing, this flagship institute of Bharatiya Vidya Bhavan has
          evolved into a sprawling network offering journalism, communication,
          media education, and management courses across India. Renamed in 1965
          to honor Dr. Rajendra Prasad, Indias first President and a BVB
          founder, it set the standard for professional education. In 1978, it
          expanded to include management education, leading to its present name.
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
