import styles from "./AboutUs.module.scss";
import NavigationBar from "../navigationBar/NavigationBar";
import { NextPage } from "next";
import HistorySecondRow from "./components/historySecondRow/HistorySecondRow";
import HistoryThirdRow from "./components/historyThirdRow/HistoryThirdRow";
import AboutUsTiles from "./components/aboutUsTiles/AboutUsTiles";
import HeadingAndFirstRow from "./components/headingAndFirstRow/HeadingAndFirstRow";
import Footer from "../footer/FooterPage";
// import supabase from "@/config/supabaseClient";
// import supabase from "@/config/supabaseClient";

const AboutUs: NextPage = () => {
  // const supabaseWrapper: any = supabase();

  // async function getAboutUsImages() {
  //   const { url } = await supabase.storage.from("GalleryImages");
  //   console.log("res", res);
  // }

  return (
    <div>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUs}>
          <HeadingAndFirstRow />
          <HistorySecondRow />
          <HistoryThirdRow />
          <AboutUsTiles />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
