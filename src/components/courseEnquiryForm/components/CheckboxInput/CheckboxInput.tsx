import React from "react";

type CheckboxInputProps = {
  value: string;
  label: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  value,
  label,
  isChecked,
  onChange,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
