import React from "react";
import styles from "../../../../CourseEnquiryForm.module.scss";

type FileInputProps = {
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
};

const FileInput: React.FC<FileInputProps> = ({
  label,
  id,
  onChange,
  value,
}) => {
  return (
    <div className={styles.ugDegree}>
      <div className={styles.column}>
        <h3>{label}</h3>
      </div>
      <div className={`${styles.column} ${styles.fileInputBox}`}>
        {value?.name ? (
          <label htmlFor={id} className={styles.fileInputLabel}>
            {value?.name}
          </label>
        ) : (
          <label htmlFor={id} className={styles.fileInputLabel}>
            Choose File
          </label>
        )}
        <input
          type="file"
          id={id}
          className={styles.fileInput}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
