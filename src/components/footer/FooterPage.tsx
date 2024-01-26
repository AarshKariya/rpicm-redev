import styles from "./FooterPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import FooterInstituteInfo from "./components/FooterInstituteInfo";
import FooterInstituteLogo from "./components/FooterInstituteLogo";
import FooterContent from "./components/FooterContent";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <FooterInstituteLogo />
      <FooterContent />
      <FooterInstituteInfo />
    </div>
  );
};

export default Footer;
