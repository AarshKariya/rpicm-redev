import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./ImageCarousel.module.scss";
import Image from "next/image";

interface ImageObject {
  id: number;
  name: string;
  src: string;
}

const ImageCarousel = ({ images }: { images: ImageObject[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <AnimatePresence initial={false} custom={currentIndex}>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.id}
                  className={styles.imageContainer}
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image.src}
                    alt={image.name}
                    width={629}
                    height={374}
                    className={styles.image}
                    quality={100}
                  />
                  <div className={styles.imageName}>{image.name}</div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <button className={styles.arrowLeft} onClick={goToPrev}>
          &#8592;
        </button>
        <button className={styles.arrowRight} onClick={goToNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
