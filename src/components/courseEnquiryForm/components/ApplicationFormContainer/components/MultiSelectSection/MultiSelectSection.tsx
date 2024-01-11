import React from "react";
import CheckboxInput from "../../../CheckboxInput/CheckboxInput";
import styles from "./MultiSelectSection.module.scss";

type RowData = {
  title: string;
  id: string;
  options: { value: string; label: string }[];
};

type MultiSelectSectionProps = {
  rowsData: RowData[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const MultiSelectSection: React.FC<MultiSelectSectionProps> = ({
  rowsData,
  onChange,
}) => {
  return (
    <div className={styles.multiSelectSection}>
      {rowsData.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className={styles.title} aria-labelledby={row?.id} role="group">
            {row?.title}
          </div>
          <div className={styles.options}>
            {row?.options?.map((option, optionIndex) => (
              <CheckboxInput
                key={optionIndex}
                value={option?.value}
                id={option?.value}
                label={option?.label}
                onChange={onChange}
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
