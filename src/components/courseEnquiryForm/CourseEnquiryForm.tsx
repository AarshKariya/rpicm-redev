import { motion } from "framer-motion";
import styles from "./CourseEnquiryForm.module.scss";
import { useState } from "react";
import { NextPage } from "next";
import supabase from "@/config/supabaseClient";
import Step from "./components/StepContainer/StepComponent/StepComponent";
import StepsContainer from "./components/StepContainer/StepsContainer";
import WindowWidthLine from "./components/WindowWidthLine/WindowWidthLine";
import ApplicationFormContainer from "./components/ApplicationFormContainer/ApplicationFormContainer";
import PaymentDetails from "./components/PaymentDetails/PaymentDetails";
import FileInputsSection from "./components/FileInputSection/FileInputSection";
import NavigationBar from "../navigationBar/NavigationBar";
import Footer from "../footer/FooterPage";
import ExploreCourses from "../exploreCourses/ExploreCourses";
import { useFormik } from "formik";

const CourseEnquiryForm: React.FC<{ currentStep?: number }> = ({
  currentStep = 1,
}) => {
  console.log("supabase", supabase);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCheckBoxChange = (e: any) => {
    // setIsChecked(e.target.checked);
    setIsFormValid(e.target.checked);
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };

  const handlePlaceChange = (e: any) => {
    setPlace(e.target.value);
  };

  const handleButtonClick = () => {
    // Perform any action on button click after validation
  };

  const formik = useFormik({
    initialValues: {
      applyingFor: [],
      course: [],
      firstName: "",
      fatherName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      state: "",
      ugUniName: "",
      dob: "",
      gender: "",
      employmentStatus: "",
      // ugDegree: {},
      // pgDegree: {},
      // idProof: {},
      // photograph: {},
      applicationDate: "",
      applicationPlace: "",
    },

    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  console.log("formik", formik);

  return (
    <>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.courseEnquiryForm}>
        <div className={styles.heading}>Course Enquiry Form</div>
        <StepsContainer />
        <WindowWidthLine />
        <form onSubmit={formik.handleSubmit}>
          <ApplicationFormContainer formik={formik} />
          {/* <FileInputsSection formik={formik} /> */}
          <WindowWidthLine />
          <PaymentDetails
            date={date}
            place={place}
            handleDateChange={handleDateChange}
            handlePlaceChange={handlePlaceChange}
            handleCheckBoxChange={handleCheckBoxChange}
            handleButtonClick={handleButtonClick}
            isFormValid={isFormValid}
            formik={formik}
          />
        </form>
      </div>
      <ExploreCourses />
      <Footer />
    </>
  );
};

export default CourseEnquiryForm;
