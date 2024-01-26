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
          Kulapati Kanhaiyalal Maneklal Munshi founded the Bharatiya Vidya
          Bhavan a full decade before the advent of Independence, on November 7,
          1938, as an ‘Adventure in Faith’. A faith in India’s Past, Present and
          Future. The founding father was known for being the most popular
          Gujarati writer, statesman, politician, freedom fighter and an
          educationalist.
        </p>
        <p>
          The founding of Bhavan’s was based on the idea of preservation and
          propagation of Bharatiya Sanskriti (Indian culture) and Sanskrit, the
          mother of languages, the akshaya patra – the inexhaustible reservoir.
          Over the years from being a modest Indological research institution,
          it has steadily grown into a comprehensive, co-operative, apolitical,
          national movement with an international outlook. It seeks to inculcate
          a value-based life. The promotion of ethical and spiritual values in
          everything that it does.
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
