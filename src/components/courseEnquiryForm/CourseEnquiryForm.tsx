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
import validationSchema from "./helpers/validationSchema";
import { CourseOption } from "./components/ApplicationFormContainer/components/CustomDropdown/helpers/customDropdown";

const CourseEnquiryForm: React.FC<{ currentStep?: number }> = ({
  currentStep = 1,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCheckBoxChange = (e: any) => {
    // setIsChecked(e.target.checked);
    setIsFormValid(e.target.checked);
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      // Insert data into the 'courseEnquiryEntries' table.
      await supabase.from("courseEnquiryEntries").upsert([
        {
          // Map the fields from the Formik form to the corresponding columns in the table.
          firstName: formData?.firstName,
          fatherName: formData?.fatherName,
          lastName: formData?.lastName,
          phoneNumber: formData?.phoneNumber,
          email: formData?.email,
          address: formData?.address,
          state: formData?.state,
          ugUniName: formData?.ugUniName,
          dob: formData?.dob,
          gender: formData?.gender,
          employmentStatus: formData?.employmentStatus,
          enquiryDate: formData?.enquiryDate,
          enquiryPlace: formData?.enquiryPlace,
          managementCourses: formData?.managementCourses,
          communicationCourses: formData?.communicationCourses,
          preferredLocation: formData?.preferredLocation,
        },
      ]);
      formik.resetForm();
    } catch (error: any) {
      console.error("Error:", error?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      managementCourses: [] as CourseOption[],
      communicationCourses: [] as CourseOption[],
      preferredLocation: [] as CourseOption[],
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
      enquiryDate: "",
      enquiryPlace: "",
    },

    onSubmit: (values) => {
      // console.log("values", values);
      handleFormSubmit(values);
    },

    validationSchema: validationSchema,
  });

  return (
    <>
      <NavigationBar isOnLandingPage={false} />
      <div className={styles.courseEnquiryForm}>
        <div className={styles.heading}>Course Enquiry Form</div>
        {/* <StepsContainer /> */}
        {/* <WindowWidthLine /> */}
        <form onSubmit={formik.handleSubmit}>
          <ApplicationFormContainer formik={formik} />
          {/* <FileInputsSection formik={formik} /> */}
          <WindowWidthLine />
          <PaymentDetails
            date={formik.values.enquiryDate}
            place={formik.values.enquiryPlace}
            handleDateChange={formik.handleChange}
            handlePlaceChange={formik.handleChange}
            handleCheckBoxChange={handleCheckBoxChange}
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
