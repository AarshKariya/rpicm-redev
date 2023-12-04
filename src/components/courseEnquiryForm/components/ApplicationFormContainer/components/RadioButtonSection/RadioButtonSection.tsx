import React from "react";

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
    <>
      <tr>
        <td>{title}</td>
        <td>
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
        </td>
      </tr>
    </>
  );
};

export default RadioButtonSection;
