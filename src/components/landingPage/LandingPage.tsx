import React from "react";
import styles from "./LandingPage.module.scss";
import ImageComponent from "./imageComponent/ImageComponent";
import ImageText from "./imageText/ImageText";
import NavigationBar from "../navigationBar/NavigationBar";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavigationBar isOnLandingPage={true}/>
      <ImageComponent />
      <ImageText />
    </div>
  );
};

export default LandingPage;
