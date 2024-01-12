import React, { useState } from "react";
import CheckboxInput from "../../../CheckboxInput/CheckboxInput";
import styles from "./MultiSelectSection.module.scss";

type RowData = {
  title: string;
  id: string;
  options: { value: string; label: string }[];
  subOptions?: { value: string; label: string }[];
};

type MultiSelectSectionProps = {
  rowsData: RowData[];
  formik: any;
};

const MultiSelectSection: React.FC<MultiSelectSectionProps> = ({
  rowsData,
  formik,
}) => {
  const [selectedUmbrella, setSelectedUmbrella] = useState<string | null>(null);

  const handleCheckboxChange = (fieldName: any, value: any) => {
    const currentValues = formik.values[fieldName];
    const newValues = currentValues?.includes(value)
      ? currentValues.filter((item: any) => item !== value)
      : [...currentValues, value];

    formik.setFieldValue(fieldName, newValues);
    setSelectedUmbrella(newValues.includes("management") ? "course" : null);
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
              />
            ))}
          </div>
          {row.subOptions && selectedUmbrella === row.id && (
            <div className={styles.subOptionsDropdown}>
              <label
                htmlFor={`subOptions_${row.id}`}
                className={styles.subOptionsLabel}
              >
                Select a {row.title} course:
              </label>
              <select
                id={`subOptions_${row.id}`}
                name={`subOptions_${row.id}`}
                onChange={(e) =>
                  formik.setFieldValue(`subOptions_${row.id}`, e.target.value)
                }
                value={formik.values[`subOptions_${row.id}`]}
                className={styles.subOptionsSelect}
              >
                <option value="" disabled>
                  Choose a {row.title} course
                </option>
                {row.subOptions.map((subOption, subOptionIndex) => (
                  <option key={subOptionIndex} value={subOption.value}>
                    {subOption.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectSection;
