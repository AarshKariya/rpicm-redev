import React from "react";
import CheckboxInput from "../../../CheckboxInput/CheckboxInput";

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
    <>
      {rowsData.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div>{row.title}</div>
          <div>
            {row.options.map((option, optionIndex) => (
              <CheckboxInput
                key={optionIndex}
                value={option.value}
                label={option.label}
                isChecked={false}
                onChange={() => row.onChange(option.value)}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MultiSelectSection;
