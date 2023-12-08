import React from "react";
import styles from "./RadioButtonSection.module.scss";

type RadioButtonSectionProps = {
  title: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

const RadioButtonSection: React.FC<RadioButtonSectionProps> = ({
  title,
  options,
  onChange,
}) => {
  return (
    <div className={styles.radioButtonSection}>
      <div className={styles.leftColumn}>{title}</div>
      <div className={styles.rightColumn}>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={title.toLowerCase().replace(" ", "-")}
              value={option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonSection;
