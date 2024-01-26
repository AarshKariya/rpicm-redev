import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IntroPageListItems } from "@/components/introPage/helpers/introSectionHelpers";

const ScrollList = () => {
  const duration = 0.5; // Set the duration of each animation (in seconds)
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem(
        (prevItem: any) => (prevItem + 1) % IntroPageListItems.length
      );
    }, 3000); // Set the interval for scrolling (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <AnimatePresence>
        {IntroPageListItems.map((item) => (
          <motion.div
            key={item.id}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration, type: "tween" }}
            style={{ marginBottom: 10 }}
          >
            {item.title}
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.div
        key="spacer"
        style={{ height: 10, opacity: 0 }} // Spacer to separate the end and the beginning for smooth scrolling
      />
    </div>
  );
};

export default ScrollList;
