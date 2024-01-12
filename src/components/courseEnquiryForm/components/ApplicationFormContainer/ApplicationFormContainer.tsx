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
      <MultiSelectSection rowsData={rowsData} formik={formik} />

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
        label="Phone Number"
        placeholder="Phone Number"
        id="phoneNumber"
        name="phoneNumber"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        type="text"
      />
      <FormInput
        label="Email"
        placeholder="Email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        type="text"
      />
      <FormInput
        label="Address"
        placeholder="Address"
        id="address"
        name="address"
        onChange={formik.handleChange}
        value={formik.values.address}
        type="text"
      />
      <FormInput
        label="State"
        placeholder="State"
        id="state"
        name="state"
        onChange={formik.handleChange}
        value={formik.values.state}
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
      <FormInput
        label="UG University"
        placeholder="UG University"
        id="ugUniName"
        name="ugUniName"
        onChange={formik.handleChange}
        value={formik.values.ugUniName}
        type="text"
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
    </motion.div>
  );
};

export default ApplicationFormContainer;
