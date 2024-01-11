import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../CourseEnquiryForm.module.scss";
import Step from "../StepContainer/StepComponent/StepComponent";
import FormInput from "../FormInput/FormInput";
import FileInput from "../FileInputSection/components/FileInput/FileInput";
import MultiSelectSection from "./components/MultiSelectSection/MultiSelectSection";
import { rowsData } from "./helpers/multiSelectRowsData";
import RadioButtonSection from "./components/RadioButtonSection/RadioButtonSection";
import {
  employmentStatus,
  genderOptions,
} from "./helpers/radioButtonSectionData";
import { NextPage } from "next";

type ApplicationFormContainerProps = {
  formik: any;
};

const ApplicationFormContainer: NextPage<ApplicationFormContainerProps> = ({
  formik,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <form onSubmit={formik.handleSubmit}>
        <MultiSelectSection
          rowsData={rowsData}
          onChange={formik.handleChange}
        />

        <div className={styles.personalInfo}>PERSONAL INFORMATION</div>

        <FormInput
          label="Name of Candidate"
          placeholder="Name of Candidate"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          type="text"
        />
        <FormInput
          label="Father's Name"
          placeholder="Father's Name"
          id="fatherName"
          name="fatherName"
          onChange={formik.handleChange}
          value={formik.values.fatherName}
          type="text"
        />
        <FormInput
          label="Last Name"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          type="text"
        />
        <FormInput
          label="Date of Birth"
          placeholder="DD - MM - YYYY"
          id="dob"
          name="dob"
          onChange={formik.handleChange}
          value={formik.values.dob}
          type="date"
        />

        <RadioButtonSection
          title="Gender"
          options={genderOptions}
          id="gender"
          name="gender"
          onChange={formik.handleChange}
        />

        <RadioButtonSection
          title="Employment Status"
          id="employmentStatus"
          name="employmentStatus"
          options={employmentStatus}
          onChange={formik.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
};

export default ApplicationFormContainer;
