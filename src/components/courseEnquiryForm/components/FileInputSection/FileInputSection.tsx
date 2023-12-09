import React from "react";
import FileInput from "./components/FileInput/FileInput"; // Update the path to FileInput component as per your project

const FileInputSection: React.FC = () => {
  return (
    <>
      <FileInput label="UG Degree" id="fileInput" />
      <FileInput label="PG Degree" id="pgFileInput" />
      <FileInput
        label="UGC NET/ UGC-CSIR NET/ SLET/ UGC-RF/ GATE"
        id="examsInput"
      />
      <FileInput label="ID Proof" id="idProof" />
      <FileInput label="Photograph" id="photograph" />
    </>
  );
};

export default FileInputSection;
