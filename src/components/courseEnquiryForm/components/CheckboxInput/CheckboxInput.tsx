import React from "react";

type CheckboxInputProps = {
  value: string;
  label: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: any;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  value,
  label,
  isChecked,
  onChange,
  className,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={onChange}
        className={className}
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
