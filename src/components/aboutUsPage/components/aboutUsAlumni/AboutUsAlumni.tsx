import { NextPage } from "next";
import React from "react";
import styles from "./AboutUsAlumni.module.scss";

const AboutUsAlumni: NextPage = () => {
  return (
    <>
      <div className={styles.aboutUsAlumniHeading}>Alumni</div>
      <div className={styles.aboutUsAlumniContent}>
        Bhavan’s HBICM has its own social networking through Alumni Association
        of the past students who have been inspired, trained and placed in
        organisations and industries across the country. The students of
        Bhavan’s RPICM, by default, become a part of the Alumni Association and
        can take the benefit of the acquaintance for finding opportunities in
        industries for better placements. Moreover, the Alumni Associations in
        different centres arrange several cultural functions that members get
        access to.
      </div>
      <div className={styles.aboutUsAlumniPrompt}>
        Fill out the form here:{" "}
        <a
          href="https://forms.gle/XQKnBi4YHwvTjiKD9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alumni form
        </a>
      </div>
    </>
  );
};

export default AboutUsAlumni;