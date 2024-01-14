import { motion, useAnimation } from "framer-motion";
import styles from "./RpicmIntroSection.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { IntroPageListItems } from "./helpers/introSectionHelpers";
import { NextPage } from "next";

const RpicmIntroSection: NextPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.redBackground}>
      <div className={styles.introText}>
        Established in 1961 as Bhavan’s College of Journalism, Advertising, and
        Printing, this flagship institute of Bharatiya Vidya Bhavan has evolved
        into a sprawling network offering journalism, communication, media
        education, and management courses across India.
      </div>
      <div className={styles.question} ref={ref}>
        <motion.div
          className={styles.introQuestion}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          Why RPICM
        </motion.div>
        <motion.div
          className={styles.line}
          initial={{ scaleX: 0 }}
          animate={controls}
          variants={{ visible: { scaleX: 1 } }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className={styles.listContainer}
          initial="hidden"
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0 } }}
        >
          <ul>
            {IntroPageListItems.map(({ title, id }, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.3 },
                  },
                }}
              >
                {title}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default RpicmIntroSection;
