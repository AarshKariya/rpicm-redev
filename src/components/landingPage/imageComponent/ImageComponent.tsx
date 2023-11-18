import React from "react";
import Image from "next/image";
import styles from "../LandingPage.module.scss";
import UnsplashImage from "../../../images/logos/unsplashImage.jpg";

const ImageComponent: React.FC = () => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={UnsplashImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default ImageComponent;
