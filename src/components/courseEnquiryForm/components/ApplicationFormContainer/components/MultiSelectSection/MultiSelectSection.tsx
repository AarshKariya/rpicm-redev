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
  formik: any;
};

const MultiSelectSection: React.FC<MultiSelectSectionProps> = ({
  rowsData,
  formik,
}) => {
  const handleCheckboxChange = (fieldName: any, value: any) => {
    const currentValues = formik.values[fieldName];
    const newValues = currentValues?.includes(value)
      ? currentValues.filter((item: any) => item !== value)
      : [...currentValues, value];

    formik.setFieldValue(fieldName, newValues);
  };

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
                value={formik.values[row.id]}
                id={option?.value}
                label={option?.label}
                onChange={() => handleCheckboxChange(row.id, option.value)}
                className={styles.checkboxInput}
                // checked={formik?.values[row.id].includes(option.value)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiSelectSection;
