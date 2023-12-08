import React from "react";
import styles from "./FormInput.module.scss";

type FormInputProps = {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={styles.formInput}>
      <div className={styles.leftColumn}>{label}</div>
      <div className={styles.rightColumn}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.inputField}
        />
      </div>
    </div>
  );
};

export default FormInput;
