import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: Array<{ id: number; src: string; width?: number; height?: number }>;
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images?.length]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        marginBottom: "240px",
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={images[index].src}
              alt={`Image ${images[index].id}`}
              width={images[index].width}
              height={images[index].height}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div
        onClick={goToPrevious}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1,
          fontSize: "24px",
        }}
      >
        &#8592;
      </div>
      <div
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1,
          fontSize: "24px",
        }}
      >
        &#8594;
      </div>
    </div>
  );
};

export default Slideshow;
