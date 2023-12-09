import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AboutUs.module.scss";
import NavigationBar from "../navigationBar/NavigationBar";

const AboutUs = () => {
  return (
    <div>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.aboutUsContainer}> <div className={styles.aboutUs}>
        <h1>About</h1>
        <div className={styles.history}>
          <h2>History</h2>
          <div className={styles.historyContent}>
            <div className={styles.historyText}> <p >
              The Rajendra Prasad Institute of Communication and Management: A
              Pioneer in Professional Education and Upskilling.
            </p>
              <p>Established in 1961 as Bhavan’s College of Journalism, Advertising, and Printing,
                this flagship institute of Bharatiya Vidya Bhavan has evolved into a
                sprawling network offering journalism, communication, media
                education, and management courses across India. Renamed in 1965 to
                honor Dr. Rajendra Prasad, Indias first President and a BVB founder,
                it set the standard for professional education. In 1978, it expanded
                to include management education, leading to its present name.</p></div>
            <div className={styles.historyImage}>
              <Image
                src="/aboutUs1.svg" // Replace with your image path
                alt="History Image"
                width={460}
                height={345}
              />
            </div>
          </div>
        </div>

        <div className={styles.today}>
          <div className={styles.todayContent}>
            <div className={styles.todayImages}>
              <div className={styles.todayImage1}>
                <Image
                  src="/aboutUs2.svg" // Replace with your image path
                  alt="Image 1"
                  width={275}
                  height={186}
                />
              </div>
              <div className={styles.todayImage2}>
                <Image
                  src="/aboutUs3.svg" // Replace with your image path
                  alt="Image 2"
                  width={295}
                  height={170}
                />
              </div>
            </div>
            <div className={styles.todayText}>
              <p>
                Today, the institute provides a range of professional courses
                catering to those seeking to enhance their communication and
                management skills. It particularly stands out for its flexibility,
                accommodating individuals in employment or pursuing other studies
                who wish to upskill outside regular working hours. Its certificate
                courses have set the benchmark for many colleges and universities,
                with some recognized as diploma courses by various institutions.
                Many government departments recognize these courses as
                qualifications for specific positions.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.professionals}>
          <div className={styles.professionalsContent}>
            <div className={styles.professionalsText}>
              <p>
                Over the decades, Bhavans RPICM has empowered countless
                professionals, including journalists, editors, public relations
                specialists, corporate communication experts, HR managers, foreign
                trade professionals, government officials, and more. Its legacy of
                success spans several generations, with lakhs of students
                benefiting from its programs.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tiles}>
          <motion.div
            whileHover={{ backgroundColor: "#253149" }}
            transition={{ duration: 0.3 }}
            className={styles.tile}
          >
            <div className={styles.tileContent}>
              <h2>Mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus sed pharetra sit
                ante mattis. Nibh massa feugiat elit vulputate scelerisque
                ultrices accumsan velit.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "#253149" }}
            transition={{ duration: 0.3 }}
            className={styles.tile}
          >
            <div className={styles.tileContent}>
              <h2>Vision</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus sed pharetra sit
                ante mattis. Nibh massa feugiat elit vulputate scelerisque
                ultrices accumsan velit.
              </p>
            </div>
          </motion.div>
        </div>
      </div></div>
      
    </div>
  );
};

export default AboutUs;
