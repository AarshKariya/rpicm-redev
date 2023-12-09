import React from "react";
import styles from "../../../../CourseEnquiryForm.module.scss";

type FileInputProps = {
  label: string;
  id: string;
};

const FileInput: React.FC<FileInputProps> = ({ label, id }) => {
  return (
    <div className={styles.ugDegree}>
      <div className={styles.column}>
        <h3>{label}</h3>
      </div>
      <div className={`${styles.column} ${styles.fileInputBox}`}>
        <label htmlFor={id} className={styles.fileInputLabel}>
          Choose File
        </label>
        <input type="file" id={id} className={styles.fileInput} />
      </div>
    </div>
  );
};

export default FileInput;
