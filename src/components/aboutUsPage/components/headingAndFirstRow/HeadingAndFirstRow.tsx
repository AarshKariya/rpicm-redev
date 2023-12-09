import React from "react";
import styles from "../../AboutUs.module.scss";
import HistoryFirstRow from "../historyFirstRow/HistoryFirstRow";
import { NextPage } from "next";

const HeadingAndFirstRow: NextPage = () => {
  return (
    <>
      <div className={styles.aboutUsHeading}>About</div>
      <div className={styles.history}>
        <div className={styles.aboutUsHistory}>History</div>
        <HistoryFirstRow />
      </div>
    </>
  );
};

export default HeadingAndFirstRow;
