// import styles from "./IntroPage.module.scss";

// const IntroPage = () => {
//   return (
//     <div className={styles.redBackground}>
//       <p>
//         Established in 1961 as Bhavan’s College of Journalism, Advertising, and
//         Printing, this flagship institute of Bharatiya Vidya Bhavan has evolved
//         into a sprawling network offering journalism, communication, media
//         education, and management courses across India.
//       </p>
//       <div className={`${styles.flexColumn} ${styles.question}`}>
//         <p>Why RPICM</p>
//         <div className={styles.flexColumn}>
//           <p className={styles.sentence}>Skills for All</p>
//           <p className={styles.sentence}>Flexible Timings</p>
//           <p className={styles.sentence}>Short & Long term courses</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroPage;

// .introText {
//   max-width: 580px;
//   width: 100%;
// }

import styles from "./IntroPage.module.scss";

const IntroPage = () => {
  return (
    <div className={styles.redBackground}>
      <div className={styles.introText}>
        Established in 1961 as Bhavan’s College of Journalism, Advertising, and
        Printing, this flagship institute of Bharatiya Vidya Bhavan has evolved
        into a sprawling network offering journalism, communication, media
        education, and management courses across India.
      </div>
      <div className={styles.question}>
        <div className={styles.introQuestion}>Why RPICM</div>
        <div className={styles.line}></div>
        <div className={styles.listContainer}>
          <ul>
            <li>Skills for All</li>
            <li>Centres Across India</li>
            <li>Certificate and Diploma Courses</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
