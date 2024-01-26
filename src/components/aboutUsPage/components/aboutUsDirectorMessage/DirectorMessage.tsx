import { NextPage } from "next";
import React from "react";
import styles from "./DirectorMessage.module.scss";

const DirectorMessage: NextPage = () => {
  return (
    <>
      <div className={styles.directorMessageHeading}>
        Director{"'"}s message:{" "}
      </div>
      <div className={styles.directorMessageContent}>
        RPICM stands as a testimony to Kulapati Dr. Munshi’s commitment to shape
        students, professionals and managers in an Indian context. He believed
        that apart from leadership, managerial skills, teamwork, motivation and
        professional skills, they are also expected to have a human approach to
        problems.
      </div>
      <div className={styles.directorMessageContent}>
        He also believed that without knowing one’s own country, its great women
        and men and without knowing the contribution made by them, just learning
        about the present day, may not have any relevance. Therefore, the
        professionals coming out of Bhavan’s constituent and affiliated colleges
        should have a special trait, stamp, and quality.
      </div>
      <div className={styles.directorMessageContent}>
        He strongly believed that no country can progress and prosper, unless it
        is founded and anchored in its heritage and values contributed and
        sustained by generation of its people. And he saw this even before
        globalisation made it imminent.
      </div>
      <div className={styles.directorMessageContent}>
        From 1961, this Institute has been evolving to take on the challenges
        that the modern times present to any educational institute. COVID-19 did
        bring us to a grinding halt. But we started work with increased zeal to
        translate Munshiji’s vision into action, for the 21st century.
        Re-inventing the legacy courses, developing new syllabi and imagining
        new courses for the future generations is how we are evolving into a
        future ready institute.
      </div>
      <div className={styles.directorMessageContent}>
        We have developed Standard Operating Procedures (SoPs) for the affiliate
        institutes and centres, planned extensive online support for the
        students and pooling of subject experts from across the country and many
        more initiatives have been planned. These steps will help us to serve
        more students across the country.
      </div>
      <div className={styles.directorMessageContent}>
        We will always strive to serve students and working professionals alike.
        This, while ensuring that they can pursue courses offered by RPICM at a
        time and convenience, that doesn’t collide with their work timings.
        Students get a chance to acquire some skills even while they are
        pursuing graduate studies. Very soon, we are going to make available
        blended and hybrid mode courses for students who can’t attend classes
        regularly or want to join us online
      </div>
    </>
  );
};

export default DirectorMessage;
