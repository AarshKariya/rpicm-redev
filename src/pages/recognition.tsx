import Footer from "@/components/footer/FooterPage";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import RecognitionPage from "@/components/recognitionPage/RecognitionPage";
import { RecognitionPageData } from "@/components/recognitionPage/helpers/recognitionPage";
import { NextPage } from "next";
import React from "react";

const RecognitionRoute: NextPage = () => {
  return (
    <div style={{ margin: "-8px" }}>
      <NavigationBar isOnLandingPage={false} />
      <div style={{ padding: "240px 98px 98px 98px" }}>
        {RecognitionPageData.map((item: any) => (
          <RecognitionPage
            key={item.id}
            title={item.title}
            description={item.recognitionItemDesc}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RecognitionRoute;
