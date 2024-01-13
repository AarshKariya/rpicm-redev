import ContactPage from "@/components/contactUsPage/ContactUs";
import Footer from "@/components/footer/FooterPage";
import IndiaMap from "@/components/indiaMap/IndiaMap";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import React from "react";

const ContactUsRoute = () => {
  return (
    <div style={{ margin: "-8px" }}>
      <NavigationBar isOnLandingPage={false} />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default ContactUsRoute;
