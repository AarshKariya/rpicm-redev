import styles from "./FooterPage.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/rpicmlogo.svg" alt="Logo" width={96} height={70} />
      </div>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/centres">
            <div className={styles.linkText}>Centres</div>
          </Link>
          <Link href="/about">
            <div className={styles.linkText}>About</div>
          </Link>
          {/* <Link href="/blog">
            <div className={styles.linkText}>Blog</div>
          </Link> */}
          <Link href="/gallery">
            <div className={styles.linkText}>Gallery</div>
          </Link>
          <Link href="/enquiry">
            <div className={styles.linkText}>Enquiry</div>
          </Link>
          <Link href="/courses">
            <div className={styles.linkText}>Courses</div>
          </Link>
          <Link href="/contact">
            <div className={styles.linkText}>Contact Us</div>
          </Link>
        </div>
        <div className={styles.socialMedia}>
          <Link href="https://www.facebook.com/profile.php?id=61555623336006&sk=about">
            <Image
              src="/facebook.svg"
              alt="Facebook"
              width={32}
              height={32}
              className={styles.socialIcon}
            />
          </Link>
          <Link href="https://www.instagram.com/bhavansrpi/">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              className={styles.socialIcon}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/bhavans-rpi-9696a9260/">
            <Image
              src="/linkedIn.svg"
              alt="LinkedIn"
              width={38}
              height={38}
              className={styles.socialIcon}
            />
          </Link>
        </div>
        <div className={styles.taglineClass}>SKILLING INDIA SINCE 1961</div>
      </div>
    </div>
  );
};

export default Footer;
