import React from "react";

type CheckboxInputProps = {
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: any;
  id: string;
  checked?: boolean;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  value,
  label,
  onChange,
  className,
  id,
  checked,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={onChange}
        className={className}
        checked={checked}
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
