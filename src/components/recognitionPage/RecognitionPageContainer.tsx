import React from "react";
import { RecognitionPageData } from "./helpers/recognitionPage";
import RecognitionPage from "./components/RecognitionPage";
import styles from "./RecognitionPageContainer.module.scss";
import { NextPage } from "next";

const RecognitionPageContainer: NextPage = () => {
  return (
    <div className={styles.recognitionPageContainer}>
      <div className={styles.recognitionPageHeading}>Recognition:</div>
      <div className={styles.recognitionPageDesc}>
        Bharatiya Vidya Bhavan is one of the oldest educational institutes in
        India. Its professional courses are most popular for skill enhancement
        and acquiring new skills among both working professionals desirous of
        career growth and students. Some of the certificate courses lead to a
        diploma, which is recognized by several universities in many states.
        Students successfully completing some of these courses are considered
        for many government recruitments in some of the states.
      </div>
      {RecognitionPageData.map((item: any) => (
        <RecognitionPage
          key={item.id}
          title={item.title}
          description={item.recognitionItemDesc}
        />
      ))}
    </div>
  );
};

export default RecognitionPageContainer;
