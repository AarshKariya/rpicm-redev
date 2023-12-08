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
  categoryOptions,
  employmentStatus,
  genderOptions,
} from "./helpers/radioButtonSectionData";
import Nationality from "./components/Nationality/Nationality";

const ApplicationFormContainer: React.FC = () => {
  const handleGenderChange = (value: string) => {
    // Handle Gender change
  };

  const handleCategoryChange = (value: string) => {
    // Handle Category change
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MultiSelectSection rowsData={rowsData} />

      <div>PERSONAL INFORMATION</div>

      <FormInput
        label="Name of Candidate"
        placeholder="Name of Candidate"
        onChange={() => {}}
      />
      <FormInput
        label="Father's Name"
        placeholder="Father's Name"
        onChange={() => {}}
      />
      <FormInput
        label="Date of Birth"
        placeholder="DD - MM - YYYY"
        onChange={() => {}}
      />

      <RadioButtonSection
        title="Gender"
        options={genderOptions}
        onChange={handleGenderChange}
      />
      <RadioButtonSection
        title="Category"
        options={categoryOptions}
        onChange={handleCategoryChange}
      />

      <Nationality />

      <RadioButtonSection
        title="Employment Status"
        options={employmentStatus}
        onChange={handleCategoryChange}
      />
    </motion.div>
  );
};

export default ApplicationFormContainer;
