import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../CourseEnquiryForm.module.scss";
import Step from "../StepContainer/StepComponent/StepComponent";
import FormInput from "../FormInput/FormInput";
import FileInput from "../FileInput/FileInput";
import MultiSelectSection from "./components/MultiSelectSection/MultiSelectSection";
import { rowsData } from "./helpers/multiSelectRowsData";
import RadioButtonSection from "./components/RadioButtonSection/RadioButtonSection";
import {
  categoryOptions,
  employmentStatus,
  genderOptions,
} from "./helpers/radioButtonSectionData";
import WindowWidthLine from "../WindowWidthLine/WindowWidthLine";
import Nationality from "./components/Nationality/Nationality";

const ApplicationFormContainer: React.FC = () => {
  const handleGenderChange = (value: string) => {
    // Handle Gender change
  };

  const handleCategoryChange = (value: string) => {
    // Handle Category change
  };

  return (
    <div className={styles.tableStructure}>
      <motion.table
        className={styles.table}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <tbody>
          <MultiSelectSection rowsData={rowsData} />

          <tr>
            <td colSpan={2} className={styles.personalInformationTitle}>
              PERSONAL INFORMATION
            </td>
          </tr>

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
        </tbody>
      </motion.table>

      <WindowWidthLine />

      <FileInput label="UG Degree" id="fileInput" />
      <FileInput label="PG Degree" id="pgFileInput" />
      <FileInput
        label="UGC NET/ UGC-CSIR NET/ SLET/ UGC-RF/ GATE"
        id="examsInput"
      />
      <FileInput label="ID Proof" id="idProof" />
      <FileInput label="Photograph" id="photograph" />
    </div>
  );
};

export default ApplicationFormContainer;
