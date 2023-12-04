import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../CourseEnquiryForm.module.scss";
import Step from "../StepContainer/StepComponent/StepComponent";
import FormInput from "../FormInput/FormInput";
import FileInput from "../FileInput/FileInput";
import MultiSelectSection from "./components/MultiSelectSection/MultiSelectSection";
import { rowsData } from "./helpers/multiSelectRowsData";
import RadioButtonSection from "./components/RadioButtonSection/RadioButtonSection";

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
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            onChange={handleGenderChange}
          />
          <RadioButtonSection
            title="Category"
            options={[
              { value: "gen", label: "GEN" },
              { value: "sebc", label: "SEBC/OBC" },
              { value: "sc", label: "SC" },
              { value: "st", label: "ST" },
              { value: "ph", label: "PH" },
              { value: "other", label: "OTHER" },
            ]}
            onChange={handleCategoryChange}
          />

          <tr>
            <td>Nationality</td>
            <td>{/* Dropdown options for countries */}</td>
          </tr>
          {/* ... Other form inputs ... */}

          <RadioButtonSection
            title="Employment Status"
            options={[
              { value: "working", label: "Working" },
              { value: "student", label: "Student" },
            ]}
            onChange={handleCategoryChange}
          />
        </tbody>
      </motion.table>

      <div className={styles.windowWidthLine}></div>

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
