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
        <div style={{ fontSize: "18px", marginBottom: "12px" }}>
          Recognition:
        </div>
        <div style={{ marginBottom: "44px" }}>
          Bharatiya Vidya Bhavan is one of the oldest educational institutes in
          India. Its professional courses are most popular for skill enhancement
          and acquiring new skills among both working professionals desirous of
          career growth and students. Some of the certificate courses lead to a
          diploma, which is recognized by several universities in many states.
          Students successfully completing some of these courses are considered
          for many government recruitments in some of the states.
        </div>
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
