import React from "react";
import styles from "./RadioButtonSection.module.scss";

type RadioButtonSectionProps = {
  title: string;
  id: string;
  name: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | undefined;
  touched?: boolean | undefined;
};

const RadioButtonSection: React.FC<RadioButtonSectionProps> = ({
  title,
  options,
  onChange,
  id,
  name,
  error,
  touched,
}) => {
  return (
    <div className={styles.radioButtonSection}>
      <div className={styles.leftColumn}>{title}</div>
      <div className={styles.rightColumn}>
        {options.map((option, index) => (
          <div key={index} className={styles.radioWrapper}>
            <label>
              <input
                type="radio"
                name={name}
                value={option.value}
                onChange={onChange}
                id={id}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {touched && error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default RadioButtonSection;
