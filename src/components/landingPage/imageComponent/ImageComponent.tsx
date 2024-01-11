import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "../LandingPage.module.scss";

const ImageComponent: React.FC = () => {
  const [imageSource, setImageSource] = useState("/landingBgImg.svg");
  const controls = useAnimation();

  useEffect(() => {
    const images = ["/landingBgImg.svg", "/landingBgImgFull.svg"];

    const updateImage = async () => {
      await controls.start({ opacity: 0 });
      const currentIndex = images.indexOf(imageSource);
      const nextIndex = (currentIndex + 1) % images.length;
      setImageSource(images[nextIndex]);
    };

    const fadeIn = async () => {
      await controls.start({ opacity: 1 });
    };

    const intervalId = setInterval(async () => {
      await updateImage();
      await fadeIn();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageSource, controls]);

  return (
    <motion.div
      className={styles.imageWrapper}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <Image
        src={imageSource}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
  );
};

export default ImageComponent;
