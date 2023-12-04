import React from "react";
import styles from "../../CourseEnquiryForm.module.scss";

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
    <tr>
      <td>{label}</td>
      <td>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.inputField}
        />
      </td>
    </tr>
  );
};

export default FormInput;
