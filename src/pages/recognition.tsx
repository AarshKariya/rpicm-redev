import Footer from "@/components/footer/FooterPage";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import RecognitionPageContainer from "@/components/recognitionPage/RecognitionPageContainer";
import { NextPage } from "next";
import React from "react";

const RecognitionRoute: NextPage = () => {
  return (
    <div style={{ margin: "-8px" }}>
      <NavigationBar isOnLandingPage={false} />
      <RecognitionPageContainer />
      <Footer />
    </div>
  );
};

export default RecognitionRoute;
