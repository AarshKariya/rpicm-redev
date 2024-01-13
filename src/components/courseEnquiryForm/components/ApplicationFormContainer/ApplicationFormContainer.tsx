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
      <MultiSelectSection formik={formik} />

      <div className={styles.personalInfo}>PERSONAL INFORMATION</div>

      <FormInput
        label="First Name"
        placeholder="First Name"
        id="firstName"
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        type="text"
        error={formik.touched.firstName && formik.errors.firstName}
        touched={formik.touched.firstName}
      />
      <FormInput
        label="Father's Name"
        placeholder="Father's Name"
        id="fatherName"
        name="fatherName"
        onChange={formik.handleChange}
        value={formik.values.fatherName}
        type="text"
        error={formik.touched.fatherName && formik.errors.fatherName}
        touched={formik.touched.fatherName}
      />
      <FormInput
        label="Last Name"
        placeholder="Last Name"
        id="lastName"
        name="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        type="text"
        error={formik.touched.lastName && formik.errors.lastName}
        touched={formik.touched.lastName}
      />
      <FormInput
        label="Phone Number"
        placeholder="Phone Number"
        id="phoneNumber"
        name="phoneNumber"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        type="text"
        error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        touched={formik.touched.phoneNumber}
      />
      <FormInput
        label="Email"
        placeholder="Email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        type="text"
        error={formik.touched.email && formik.errors.email}
        touched={formik.touched.email}
      />
      <FormInput
        label="Address"
        placeholder="Address"
        id="address"
        name="address"
        onChange={formik.handleChange}
        value={formik.values.address}
        type="text"
        error={formik.touched.address && formik.errors.address}
        touched={formik.touched.address}
      />
      <FormInput
        label="State"
        placeholder="State"
        id="state"
        name="state"
        onChange={formik.handleChange}
        value={formik.values.state}
        type="text"
        error={formik.touched.state && formik.errors.state}
        touched={formik.touched.state}
      />
      <FormInput
        label="Date of Birth"
        placeholder="DD - MM - YYYY"
        id="dob"
        name="dob"
        onChange={formik.handleChange}
        value={formik.values.dob}
        type="date"
        error={formik.touched.dob && formik.errors.dob}
        touched={formik.touched.dob}
      />
      <FormInput
        label="UG University"
        placeholder="UG University"
        id="ugUniName"
        name="ugUniName"
        onChange={formik.handleChange}
        value={formik.values.ugUniName}
        type="text"
        error={formik.touched.ugUniName && formik.errors.ugUniName}
        touched={formik.touched.ugUniName}
      />

      <RadioButtonSection
        title="Gender"
        options={genderOptions}
        id="gender"
        name="gender"
        onChange={formik.handleChange}
        error={formik.touched.gender && formik.errors.gender}
        touched={formik.touched.gender}
      />

      <RadioButtonSection
        title="Employment Status"
        id="employmentStatus"
        name="employmentStatus"
        options={employmentStatus}
        onChange={formik.handleChange}
        error={
          formik.touched.employmentStatus && formik.errors.employmentStatus
        }
        touched={formik.touched.employmentStatus}
      />
    </motion.div>
  );
};

export default ApplicationFormContainer;
