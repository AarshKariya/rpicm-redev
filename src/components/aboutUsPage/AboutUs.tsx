import styles from "./AboutUs.module.scss";
import NavigationBar from "../navigationBar/NavigationBar";
import { NextPage } from "next";
import HistorySecondRow from "./components/historySecondRow/HistorySecondRow";
import HistoryThirdRow from "./components/historyThirdRow/HistoryThirdRow";
import AboutUsTiles from "./components/aboutUsTiles/AboutUsTiles";
import HeadingAndFirstRow from "./components/headingAndFirstRow/HeadingAndFirstRow";

const AboutUs: NextPage = () => {
  return (
    <div>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUs}>
          <HeadingAndFirstRow />
          <HistorySecondRow />
          <HistoryThirdRow />
          <AboutUsTiles />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
