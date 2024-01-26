import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./RecognitionPage.module.scss";
import { RecognitionAccordionData } from "./helpers/recognitionPage";

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
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3>{title}</h3>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.accordionContent}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
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
