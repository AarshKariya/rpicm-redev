import React from "react";
import styles from "./FormInput.module.scss";

type FormInputProps = {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id: string;
  name: string;
  type: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  name,
  type,
}) => {
  return (
    <div className={styles.formInput}>
      <div className={styles.leftColumn}>{label}</div>
      <div className={styles.rightColumn}>
        <input
          type={type}
          value={value}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.inputField}
        />
      </div>
    </div>
  );
};

export default FormInput;
