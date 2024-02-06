import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./RecognitionPage.module.scss";
import { RecognitionAccordionData } from "../helpers/recognitionPage";

const RecognitionPage: React.FC<RecognitionAccordionData> = ({
  title,
  description,
  key,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion} key={key}>
      <motion.div
        className={styles.accordionHeader}
        onClick={toggleAccordion}
        initial={false}
        animate={{ backgroundColor: isOpen ? "#e6e6e6" : "#f4f4f4" }}
        whileHover={{ backgroundColor: isOpen ? "#d9d9d9" : "#f0f0f0" }}
        whileTap={{ scale: 0.98 }}
      >
        <h3>{title}</h3>
        {/* <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown />
        </motion.div> */}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.accordionContent}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecognitionPage;
