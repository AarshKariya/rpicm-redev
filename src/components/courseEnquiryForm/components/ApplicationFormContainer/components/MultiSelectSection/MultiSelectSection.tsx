import React from "react";
import CheckboxInput from "../../../CheckboxInput/CheckboxInput";
import styles from "./MultiSelectSection.module.scss";

type RowData = {
  title: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

type MultiSelectSectionProps = {
  rowsData: RowData[];
};

const MultiSelectSection: React.FC<MultiSelectSectionProps> = ({
  rowsData,
}) => {
  return (
    <div className={styles.multiSelectSection}>
      {rowsData.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className={styles.title}>{row.title}</div>
          <div className={styles.options}>
            {row.options.map((option, optionIndex) => (
              <CheckboxInput
                key={optionIndex}
                value={option.value}
                label={option.label}
                isChecked={false}
                onChange={() => row.onChange(option.value)}
                className={styles.checkboxInput}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiSelectSection;
