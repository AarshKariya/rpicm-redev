import { NextPage } from "next";
import styles from "./FooterPage.module.scss";
import FooterColumn from "./components/FooterColumn/FooterColumn";
import { FooterConfig, config } from "./helpers/footerConfig";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      {config?.map((footerConfig: FooterConfig, index: number) => (
        <FooterColumn
          key={`footerColumn-${index}`}
          title={footerConfig?.footerTitle}
          items={footerConfig?.footerItems}
        />
      ))}
    </footer>
  );
};

export default Footer;
