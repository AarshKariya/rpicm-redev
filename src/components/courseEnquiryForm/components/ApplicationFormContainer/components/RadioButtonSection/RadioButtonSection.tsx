import React from "react";
import styles from "./RadioButtonSection.module.scss";

type RadioButtonSectionProps = {
  title: string;
  id: string;
  name: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButtonSection: React.FC<RadioButtonSectionProps> = ({
  title,
  options,
  onChange,
  id,
  name,
}) => {
  return (
    <div className={styles.radioButtonSection}>
      <div className={styles.leftColumn}>{title}</div>
      <div className={styles.rightColumn}>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={onChange}
              id={id}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonSection;
