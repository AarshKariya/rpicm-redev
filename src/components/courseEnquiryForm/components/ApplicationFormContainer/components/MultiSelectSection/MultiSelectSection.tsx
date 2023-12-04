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
        <tr key={rowIndex}>
          <td>{row.title}</td>
          <td>
            {row.options.map((option, optionIndex) => (
              <CheckboxInput
                key={optionIndex}
                value={option.value}
                label={option.label}
                isChecked={false} // Set the checked state based on your logic
                onChange={() => row.onChange(option.value)}
              />
            ))}
          </td>
        </tr>
      ))}
    </>
  );
};

export default MultiSelectSection;
