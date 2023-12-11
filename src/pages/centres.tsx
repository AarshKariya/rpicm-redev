import Footer from "@/components/footer/FooterPage";
import IndiaMap from "@/components/indiaMap/IndiaMap";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import React from "react";

const CentresRoute = () => {
  return (
    <div style={{ margin: "-8px" }}>
      <NavigationBar isOnLandingPage={false} />
      <IndiaMap />
      <Footer />
    </div>
  );
};

export default CentresRoute;
