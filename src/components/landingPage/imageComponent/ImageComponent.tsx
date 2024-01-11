import React from "react";
import Image from "next/image";
import styles from "../LandingPage.module.scss";

const ImageComponent: React.FC = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src="/landingBgImg.jpeg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default ImageComponent;
