// Footer.js

import { NextPage } from "next";
import styles from "./FooterPage.module.scss";

const FooterColumn = ({ title, items }: any) => {
  return (
    <div className={styles.column}>
      <h3 className={styles["column-title"]}>{title}</h3>
      <ul className={styles["column-list"]}>
        {items.map((item: any, index: number) => (
          <li className={styles["column-item"]} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: NextPage = () => {
  const aboutItems = ["Blog", "Gallery"];
  const coursesItems = [
    "Communication",
    "Management",
    "Cultural Heritage of India",
    "1 Year Courses",
    "4 Year Courses",
  ];
  const stateItems1 = [
    "State 1",
    "State 2",
    "State 3",
    "State 4",
    "State 5",
    "State 6",
  ];
  const stateItems2 = [
    "State 7",
    "State 8",
    "State 9",
    "State 10",
    "State 11",
    "State 12",
  ];
  const stateItems3 = ["State 13", "State 14"];

  return (
    <footer className={styles.footer}>
      <FooterColumn title="Logo" items={[]} />
      <FooterColumn title="About" items={aboutItems} />
      <FooterColumn title="Courses" items={coursesItems} />
      <FooterColumn title="Centres" items={stateItems1} />
      <FooterColumn items={stateItems2} />
      <FooterColumn items={stateItems3} />
    </footer>
  );
};

export default Footer;
